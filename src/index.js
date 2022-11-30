import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* Copiamos el String de Conexion de Firebase,  */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhkO8aohvJFDccYsP6Y-gH5XS5OV1Su40",
  authDomain: "bikeonline00.firebaseapp.com",
  projectId: "bikeonline00",
  storageBucket: "bikeonline00.appspot.com",
  messagingSenderId: "1045404655778",
  appId: "1:1045404655778:web:b8400498f7adc972eb77fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
