import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIGcQYAhCQjCK_oZqfhm83XgU-zT848Ag",
  authDomain: "mec-lab.firebaseapp.com",
  projectId: "mec-lab",
  storageBucket: "mec-lab.appspot.com",
  messagingSenderId: "220999562830",
  appId: "1:220999562830:web:f041ba45680a07c84e751f",
  measurementId: "G-80J7L7VECV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//initializw firestore
export const db = getFirestore(app)
