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
import ResetPassword from "./pages/ResetPassword"

import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

const App = () => {

    return (
        <MainContainer>
            <AuthProvider>
                <Navbar/>

                <Route path='/login' component={LoginPage}/>
                <Route path='/register' component={RegisterPage}/>
                <Route path='/reset/password/' component={ForgotPassword}/>
                <Route path='/set/password/:uid/:token/' component={ResetPassword}/>

                <DivApp>
                    <PrivateRoute exact path='/' component={NotesListPage}/>
                    <PrivateRoute path='/notes/:id' component={NotePage}/>
                </DivApp>
            </AuthProvider>
        </MainContainer>
    )
}

export default App;
