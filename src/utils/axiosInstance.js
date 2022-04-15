// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import dayjs from 'dayjs';
//
//
// const baseURL = 'https://my-own-notes.herokuapp.com/'
//
// let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
//
// const axiosInstance = axios.create({
//     baseURL,
//     headers: {Authorization: `Bearer ${authTokens?.access}`}
// });
//
// axiosInstance.interceptors.request.use(async req => {
//     //
//     if (!authTokens){
//         authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
//         req.headers.Authorization = `Bearer ${authTokens?.access}`
//     }
//
//     const user = jwt_decode(authTokens.access)
//
//     // check the user's token expiration time
//     // if it's greater than 1, isExpired = true and then call the server to update
//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//     if (!isExpired) return req
//
//     // send to the backend old token
//     const response = await axios.post(`${baseURL}/account/api/token/refresh/`, {
//         refresh: authTokens.refresh
//     })
//
//     // after getting new refresh token, update in local storage
//     localStorage.setItem('authTokens', JSON.stringify(response.data))
//     req.headers.Authorization = `Bearer ${response.data.access}`
//     return req
// })
//
// export default axiosInstance;