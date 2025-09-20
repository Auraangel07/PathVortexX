import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFEo4je6jdmcixzPf8HrK67aQak2_1nCE",
  authDomain: "career-compass-ccff0.firebaseapp.com",
  projectId: "career-compass-ccff0",
  storageBucket: "career-compass-ccff0.firebasestorage.app",
  messagingSenderId: "939072070651",
  appId: "1:939072070651:web:56eea57a06a859e85b615e",
  measurementId: "G-PCJTN9F7NK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

window.onload = function () {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  // Signup Form Handling
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
      const confirmPassword = document.getElementById("signupConfirmPassword").value;

      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Create a new user
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Signup successful! Please log in.");
          window.location.href = "login.html"; // Redirect to login page after signup
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    });
  }

  // Login Form Handling
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      // Sign in the user
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Login successful!");
          window.location.href = "dashboard.html"; // Redirect to the dashboard after login
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    });
  }
};

