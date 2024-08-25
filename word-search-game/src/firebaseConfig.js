// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyDH1EAKGz_trvGw07nWYyJUEWB6PCZdLrg",
  authDomain: "word-search-game-15403.firebaseapp.com",
  databaseURL:
    "https://word-search-game-15403-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "word-search-game-15403",
  storageBucket: "word-search-game-15403.appspot.com",
  messagingSenderId: "357674061788",
  appId: "1:357674061788:web:95d38d898082caa4008919",
  measurementId: "G-1ZQDGBP8LC",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database };
