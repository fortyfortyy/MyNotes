import { Route, Redirect } from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../context/AuthContext";


const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return (
        // if user is not logged in, redirect to the login page
        <Route {...rest}>{!user ? <Redirect to="/login" />: children}</Route>
    )
}

export default PrivateRoute