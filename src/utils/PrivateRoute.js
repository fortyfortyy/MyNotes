import { Route, Redirect } from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../context/AuthContext";


const PrivateRoute = ({children, ...rest}) => {
    let {user, demoUser} = useContext(AuthContext)
    return (
        // if user is not logged in, redirect to the home page
        <Route {...rest}>{!demoUser && !user ? <Redirect to="/home" />: children}</Route>
    )
}

export default PrivateRoute