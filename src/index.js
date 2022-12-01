import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

/* Copiamos el String de Conexion de Firebase,  */


// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyCgwCVF7MGf_6CNnOhLUA1Uc9bWUNG4HuE",
  authDomain: "bikeonline8.firebaseapp.com",
  projectId: "bikeonline8",
  storageBucket: "bikeonline8.appspot.com",
  messagingSenderId: "677514572326",
  appId: "1:677514572326:web:8e41617b37420d70acace7"
}; */

// Initialize Firebase
/* const app = initializeApp (firebaseConfig); */

const app = initializeApp ({
  apiKey: "AIzaSyCgwCVF7MGf_6CNnOhLUA1Uc9bWUNG4HuE",
  authDomain: "bikeonline8.firebaseapp.com",
  projectId: "bikeonline8",
  storageBucket: "bikeonline8.appspot.com",
  messagingSenderId: "677514572326",
  appId: "1:677514572326:web:8e41617b37420d70acace7"
})



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
