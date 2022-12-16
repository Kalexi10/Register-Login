// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBd908_anEbOdEej9UA7e6QfRLvX-9ddQ",
    authDomain: "loginregister-7fe3c.firebaseapp.com",
    projectId: "loginregister-7fe3c",
    storageBucket: "loginregister-7fe3c.appspot.com",
    messagingSenderId: "205460202025",
    appId: "1:205460202025:web:cfa90ad4ceed86683af238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

document.querySelector("#logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "login.html";
    }).catch((error) => {
        // An error happened.
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        document.querySelector("h1").innerText = "Hello! " + user.email
    } else {
        // User is signed out
        window.location.href = "login.html";
        // ...
    }
});
