import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import {ToastContainer} from "react-toastify";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ToastContainer style={{top: '50px'}}/>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
