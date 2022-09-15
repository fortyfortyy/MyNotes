import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import {AuthProvider} from './context/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <ToastContainer style={{top: '50px'}}/>
                <App/>
            </Router>
        </AuthProvider>
    </React.StrictMode>
,
document.getElementById('root')
);
