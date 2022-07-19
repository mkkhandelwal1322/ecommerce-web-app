import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-yPkP1CFmZLhZC5am8VumeF0L8CKwR_Y",
  authDomain: "ecommerce-app-c1d1d.firebaseapp.com",
  projectId: "ecommerce-app-c1d1d",
  storageBucket: "ecommerce-app-c1d1d.appspot.com",
  messagingSenderId: "734407174901",
  appId: "1:734407174901:web:8e38d59ef7b69f71d5b3bc",
  measurementId: "G-DBWTR10KDD",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();

export { firebaseConfig, firebaseApp, db, auth };
