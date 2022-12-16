// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

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

document.querySelector("#login").addEventListener("submit", login)

function login(event) {
    event.preventDefault()

    const email = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // Simulate a mouse click:
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            console.log(error)
        });
}