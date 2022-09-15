import {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useHistory, Redirect} from "react-router-dom";
import {toast} from 'react-toastify';

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children}) => {

    // try to get ONCE (thanks to arrow function after useState) the authTokens from the local storage, if there's nothing, return null
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [demoUser, setDemoUserState] = useState(null)
    let [demoNotes, setDemoNotes] = useState(() => localStorage.getItem('demoNotes') ? JSON.parse(localStorage.getItem('demoNotes')) : [])

    let setDemoUser = () => {
        // if user is authenticated, set demoUser to false.
        if (user) {
            setDemoUserState(false)
            console.log('Ustawienie Demo User na false: ', demoUser)
            return
        }

        // If user is not authenticated, and wants to use demo notes set userDemo to true
        if (!user && !demoUser) {
            setDemoUserState(true)
        }
    }

    // when the page is first loaded, trigger this and make sure we have a new token generated
    let [loading, setLoading] = useState(true)

    const history = useHistory() // can't use Redirect, instead need to use that method
    // const params = useParams()

    const [captchaResult, setCaptchaResult] = useState()

    const baseURL = 'https://my-own-notes.herokuapp.com'

    let registerUser = async (e) => {
        let response = await fetch(`${baseURL}/account/api/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'first_name': e.first_name,
                'email': e.email,
                'password': e.password,
                'password2': e.password2,
            })
        })
        await response.json()
        if (response.status === 201) {
            toast.success("Account has been created!", {
                position: toast.POSITION.TOP_RIGHT,
            })
            toast.warning("Please confirm your email to activate account", {
                position: toast.POSITION.TOP_RIGHT,
            })
            setTimeout(function () {
                history.push('/login')
            }, 6000);

        } else {
            toast.error('Something gone wrong, check your form', {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }


    let activateAccount = async (e) => {
        e.preventDefault()
        let url = window.location.hash
        let url_split = url.split('/')
        let uid = url_split[3]
        let token = url_split[4]

        let response = await fetch(`${baseURL}/account/activate/${uid}/${token}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'uidb64': e.uid,
                'token': e.token,
            })
        })
        let data = await response.json()
        if (response.status === 200) {
            console.log('Status is 200')
            toast.success("Your account has been activated!", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })

        } else if (response.status === 400) {
            console.log('Status is 400')
            toast.error('Link is invalid', {
                position: toast.POSITION.TOP_CENTER,
                containerId: 'loginPage',
            })
        } else {
            console.log('Another err')
            toast.error('Something gone wrong! If the problem repeat, please contanct support', {
                position: toast.POSITION.TOP_CENTER,
                containerId: 'loginPage',
            })
        }
        history.push('/login')
    }


    let loginUser = async (e) => {
        let response = await fetch(`${baseURL}/account/api/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'email': e.email, 'password': e.password})
        })
        let data = await response.json()
        if (response.status === 200) {
            // setAuthTokens value and store it in state and in local storage
            setAuthTokens(data)

            // decode access token that store user information
            setUser(jwt_decode(data.access))

            // Set localstorage user's access token, whenever user comes back e.g. next day, still can be logged in
            localStorage.setItem('authTokens', JSON.stringify(data))
            toast.success("Hey 👋 you are logged in!", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'notesPage',
            })
            // Set DemoUser to false because user is logged in
            setDemoUserState(false)
        } else {
            toast.error(data['detail'], {
                position: "top-center",
                autoClose: 3000,
            });
        }
    }


    let resetPasswordUser = async (e) => {
        let response = await fetch(`${baseURL}/account/reset/password/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'email': e.email})
        })
        if (response.status === 200) {
            toast.success("Please check your email", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })
        }
    }


    let newUserPassword = async (e) => {
        let url = window.location.hash
        let url_split = url.split('/')
        let uid = url_split[4]
        let token = url_split[5]

        let response = await fetch(`${baseURL}/account/set/password/${uid}/${token}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'password1': e.password1,
                'password2': e.password2,
                'uidb64': uid,
                'token': token,
            })
        })
        await response.json()
        if (response.status === 200) {
            toast.success("Your password has been changed!", {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'loginPage',
            })
            history.push('/')
        } else {
            toast.error("Something gone wrong, try again later", {
                position: toast.POSITION.TOP_CENTER,
            })
            setTimeout(function () {
                window.location.replace('/reset/password');
            }, 6000);
        }
    }


    let updateToken = async () => {
        let response = await fetch(`${baseURL}/account/api/token/refresh/`, {
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
        toast.warning("You are successfully logged out", {
            position: toast.POSITION.TOP_RIGHT,
            containerId: 'homePage',
        })
    }


    let handleRecaptcha = async (e) => {
        let response = await fetch(`${baseURL}/api/recaptcha/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'captcha_value': e})
        })
        let data = await response.json()
        if (response.status === 200) {
            setCaptchaResult(data.captcha.success)
        }
    }


    let contextData = {
        setUser: setUser,
        setAuthTokens: setAuthTokens,
        captchaResult: captchaResult,
        handleRecaptcha: handleRecaptcha,
        activateAccount: activateAccount,
        registerUser: registerUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
        resetPasswordUser: resetPasswordUser,
        newUserPassword: newUserPassword,
        setDemoUser: setDemoUser,
        setDemoNotes: setDemoNotes,
        demoNotes: demoNotes,
        user: user,
        demoUser: demoUser,
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