import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import connect from '@vkontakte/vk-connect';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import App from './components/App';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCOQlL4ImWDyGyG3yq1QzCpoEL7Kcmh46w",
  authDomain: "kanban-efd5b.firebaseapp.com",
  databaseURL: "https://kanban-efd5b.firebaseio.com",
  projectId: "kanban-efd5b",
  storageBucket: "kanban-efd5b.appspot.com",
  messagingSenderId: "248459954323",
  appId: "1:248459954323:web:772d44761733f23afa2566",
  measurementId: "G-6GZ5H2FY0R"
});
firebase.analytics();

// Init VK  Mini App
// connect.send('VKWebAppInit');

ReactDOM.render(<App />, document.getElementById('root'));
