import {useContext} from "react";

import axios from "axios";
import dayjs from 'dayjs';
import jwt_decode from "jwt-decode";

import AuthContext from "../context/AuthContext";


const baseURL = 'http://192.168.0.8:8000'
// const baseURL = 'https://my-own-notes.herokuapp.com'   for development


// Custom Hook and recomended way to override states in AuthContext
const useAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext)

    const axiosInstance = axios.create({
        baseURL,
        headers: {Authorization: `Bearer ${authTokens?.access}`}
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.access)

        // check the user's token expiration time
        // if it's greater than 1, isExpired = true and then call the server to update
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req

        // send to the backend old token
        const response = await axios.post(`${baseURL}/account/api/token/refresh/`, {
            refresh: authTokens.refresh
        })

        // after getting new refresh token, update in local storage
        localStorage.setItem('authTokens', JSON.stringify(response.data))

        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })


    return axiosInstance
}

export default useAxios;