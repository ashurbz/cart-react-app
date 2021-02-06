import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDiBNFtOnuNf3Nke44xnmnPQdGFUH7FLVs",
  authDomain: "cart-956dc.firebaseapp.com",
  projectId: "cart-956dc",
  storageBucket: "cart-956dc.appspot.com",
  messagingSenderId: "662147711536",
  appId: "1:662147711536:web:fb82f3f4c789df5233a3f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  
    <App />,
  

  

  document.getElementById('root')
);

