// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCsyi6FX56XehU4appj0Qe2cNy-FzsWK08",
  authDomain: "marson-ac067.firebaseapp.com",
  projectId: "marson-ac067",
  storageBucket: "marson-ac067.firebasestorage.app",
  messagingSenderId: "715158757284",
  appId: "1:715158757284:web:0bd6e4dc6e9498c3602b31",
  measurementId: "G-GHEY3B0BX7"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

// Fungsi Daftar Pengguna
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailRegister").value;
  const password = document.getElementById("passwordRegister").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Pengguna berhasil terdaftar:", user);
      // Redirect ke halaman login setelah berhasil daftar
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error pendaftaran:", error.message);
    });
});

// Fungsi Login Pengguna
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Pengguna berhasil login:", user);
      // Redirect ke halaman dashboard setelah berhasil login
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Error login:", error.message);
    });
});
