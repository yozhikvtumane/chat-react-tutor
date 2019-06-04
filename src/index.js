import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from "./signup/signup";
import DashboardComponent from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyBy-JqxZj8mu_akEdOuWc83wcKH89ozFfc",
    authDomain: "chat-react-tutor.firebaseapp.com",
    databaseURL: "https://chat-react-tutor.firebaseio.com",
    projectId: "chat-react-tutor",
    storageBucket: "chat-react-tutor.appspot.com",
    messagingSenderId: "1066024507254",
    appId: "1:1066024507254:web:4677445c894f4360"
});

const routing = (
    <Router>
        <div id="routing-container">
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/signup" component={SignupComponent}></Route>
            <Route path="/dashboard" component={DashboardComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
