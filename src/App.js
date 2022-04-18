import React from "react";
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import {MainContainer} from "./styles/application";

import PrivateRoute from './utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ActivateAccount from "./pages/ActivateAccount";


import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from "./components/PageNotFound/PageNotFoundStyles";


const App = () => {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    return (
        <MainContainer>
            <AuthProvider>
                <Navbar/>

                <Switch>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/register' component={RegisterPage}/>
                    <Route path='/reset/password' component={ForgotPassword}/>
                    <Route path='/set/password/:uid/:token' component={ResetPassword}/>
                    <Route path='/activate/:uid/:token' component={ActivateAccount}/>

                    <PrivateRoute exact path='/' component={NotesListPage}/>
                    <PrivateRoute exact path='/notes/:id' component={NotePage}/>

                    <Route component={PageNotFound}/>
                    <Route path='/404' component={PageNotFound}/>
                </Switch>

                <Footer/>
            </AuthProvider>
        </MainContainer>
    )
}

export default App;
