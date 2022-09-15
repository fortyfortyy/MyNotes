import React, {useContext} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import {MainContainer} from "./styles/application";

import PrivateRoute from './utils/PrivateRoute';
import AuthContext from './context/AuthContext';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ActivateAccount from "./pages/ActivateAccount";
import MainPage from './pages/MainPage';
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from "./components/PageNotFound/PageNotFoundStyles";


const App = () => {
    let {user} = useContext(AuthContext)
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    return (
        <MainContainer>
            <Navbar/>

            <Switch>
                <Route path='/home' component={MainPage}/>
                <Route path='/reset/password' component={ForgotPassword}/>
                <Route path='/account/set/password/:uid/:token' component={ResetPassword}/>
                <Route path='/account/activate/:uid/:token' component={ActivateAccount}/>

                <PrivateRoute exact path='/notes' component={NotesListPage}/>
                <PrivateRoute exact path='/notes/:id' component={NotePage}/>

                {
                    !user ? <Route path='/login' component={LoginPage}/> : <Redirect to='/notes'/>
                }
                {
                    !user ? <Route path='/register' component={RegisterPage}/> : <Redirect to='/notes'/>
                }

                <Route exact path='/'>
                    {user ? <Redirect to='/notes'/> : <Redirect to='/home'/>}
                </Route>

                <Route component={PageNotFound}/>
            </Switch>

            <Footer/>
        </MainContainer>
    )
}

export default App;