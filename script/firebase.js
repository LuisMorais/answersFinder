// Import the functions you need from the SDKs you need

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js'

import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDEzx2m1WKxGPgBJCmm8qmDi7JmJi5wgWQ",

  authDomain: "answer-finder-fa3f9.firebaseapp.com",
  
  databaseURL: "https://answer-finder.firebaseio.com",

  projectId: "answer-finder-fa3f9",

  storageBucket: "answer-finder-fa3f9.appspot.com",

  messagingSenderId: "776709706463",

  appId: "1:776709706463:web:3894c8fd7b70f7bfc14f6a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)