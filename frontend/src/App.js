import React from "react";
import {Route} from 'react-router-dom';

import './App.css';
import {DivApp, MainContainer} from "./styles/application";

import PrivateRoute from './utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext';

import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ActivateAccount from "./pages/ActivateAccount";


import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <MainContainer>
            <ToastContainer style={{top: '50px'}}/>

            <AuthProvider>
                <Navbar/>

                <Route path='/login' component={LoginPage}/>
                <Route path='/register' component={RegisterPage}/>
                <Route path='/reset/password/' component={ForgotPassword}/>
                <Route path='/account/set/password/:uid/:token/' component={ResetPassword}/>
                <Route path='/account/activate/:uid/:token/' component={ActivateAccount}/>

                <DivApp>
                    <PrivateRoute exact path='/' component={NotesListPage}/>
                    <PrivateRoute path='/notes/:id' component={NotePage}/>
                </DivApp>
            </AuthProvider>
        </MainContainer>
    )
}

export default App;
