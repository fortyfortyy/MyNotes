import {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useHistory, useParams} from "react-router-dom";
import {toast} from 'react-toastify';

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


    let registerUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/account/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'first_name': e.target.first_name.value,
                'email': e.target.email.value,
                'password': e.target.password.value,
                'password2': e.target.password2.value,
            })
        })
        let data = await response.json()
        if (response.status === 201) {
            toast.success("Account has been created!", {
                position: toast.POSITION.TOP_RIGHT,
            })
            toast.warning("Please confirm your email to activate account", {
                position: toast.POSITION.TOP_RIGHT,
            })
            setTimeout(function () {
                window.location.replace('/login');
            }, 7000);

        } else {
            toast.error('Something gone wrong, check your form', {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }

    let activateAccount = async (e) => {
        e.preventDefault()
        let url = window.location.pathname
        let url_split = url.split('/')
        let uid = url_split[3]
        let token = url_split[4]

        let response = await fetch(`http://127.0.0.1:8000/account/activate/${uid}/${token}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let data = await response.json()
        if (response.status === 200) {
            toast.success("Your account has been activated!", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })

        } else if (response.status === 400) {
            toast.error('Link is invalid', {
                position: toast.POSITION.TOP_CENTER,
                containerId: 'loginPage',
            })
        }
        history.push('/')
    }


    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/account/api/token/', {
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
            toast.success("Hey 👋 you are logged in!", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })
            history.push('/') // redirect user to homepage
        } else {
            toast.error(data['detail'], {
                position: "top-center",
                autoClose: 3000,
            });
        }
    }


    let resetPasswordUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/account/reset/password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'email': e.target.email.value})
        })
        let data = await response.json()
        if (response.status === 200) {
            toast.success("Please check your email", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })
        }
        history.push('/')
    }


    let newUserPassword = async (e) => {
        e.preventDefault()
        let url = window.location.pathname
        let url_split = url.split('/')
        let uid = url_split[4]
        let token = url_split[5]

        let response = await fetch(`http://127.0.0.1:8000/account/set/password/${uid}/${token}/`, {
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
            history.push('/')
            toast.success("Your password has been changed!", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })
        } else {
            toast.error("Something gone wrong, try again later", {
                position: toast.POSITION.TOP_CENTER,
            })
            setTimeout(function () {
                window.location.replace('/reset/password');
            }, 7000);
        }
    }


    let updateToken = async () => {
        let response = await fetch('http://127.0.0.1:8000/account/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'refresh': authTokens?.refresh}) // if there's no authTokens, don't call refresh func
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            toast.warning("Sorry you need to logged in again", {
                position: toast.POSITION.TOP_CENTER,
                containerId: 'loginPage',
            })
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
        toast.warning("You are successfully logged out", {
            position: toast.POSITION.TOP_RIGHT,
            containerId: 'loginPage',
        })
    }


    let contextData = {
        activateAccount: activateAccount,
        registerUser: registerUser,
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