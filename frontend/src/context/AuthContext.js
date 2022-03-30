import {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import {Redirect, useHistory, useParams} from "react-router-dom";

const AuthContext = createContext()
export default AuthContext;


export const AuthProvider = ({children}) => {

    // try to get ONCE (thanks to arrow function after useState) the authTokens from the local storage, if there's nothing, return null
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    // when the page is first loaded, trigger this and make sure we have a new token generated
    let [loading, setLoading] = useState(true)

    const history = useHistory() // can't use Redirect, instead need to use that method
    const params = useParams()

    // async function wait on some network calls here and passing the event
    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'email': e.target.email.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        if (response.status === 200) {

            // setAuthTokens value and store it in state and in local storage
            setAuthTokens(data)

            // decode access token that store user information
            setUser(jwt_decode(data.access))

            // Set localstorage user's access token, whenever user comes back e.g next day, still can be logged in
            localStorage.setItem('authTokens', JSON.stringify(data))
            history.push('/') // redirect user to homepage
        } else {
            console.log(response.status)
        }
    }


    let resetPasswordUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/reset/password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'email': e.target.email.value})
        })
        let data = await response.json()
        if (response.status === 200) {
            alert('Please check your email')
        } else {
            console.log(response)
        }
    }


    let newUserPassword = async (e) => {
        e.preventDefault()
        let url = window.location.pathname
        let url_split = url.split('/')
        let uid = url_split[3]
        let token = url_split[4]

        let response = await fetch(`http://127.0.0.1:8000/set/password/${uid}/${token}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'password1': e.target.password1.value,
                'password2': e.target.password2.value,
                'uidb64': uid,
                'token': token,
            })
        })
        let data = await response.json()
        if (response.status === 200) {
            alert('Password has been changed.')
            history.push('/')
        } else {
            alert('Ups something gone wrong, try again.')
        }
    }


    let updateToken = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'refresh': authTokens?.refresh}) // if there's no authTokens, don't call refresh func
        })
        let data = await response.json()

        if (response.status === 200) {
            console.log('Token Updated')
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')
    }


    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
        resetPasswordUser: resetPasswordUser,
        newUserPassword: newUserPassword,
        user: user,
        authTokens: authTokens,
    }

    // life cycle methods, refresh token every 4 minutes
    useEffect(() => {

        if (loading && authTokens) {
            updateToken()
        } else {
            setLoading(false)
        }

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])


    // AuthProvider provide all information into all components
    // if the page is loading don't render children until AuthProvider is completed
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}