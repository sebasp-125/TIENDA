  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { GoogleAuthProvider } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyDhuy1R4SWy7ZSSe9iFtTUf7zBn4VtVZL8",
    authDomain: "supermercado-5350b.firebaseapp.com",
    databaseURL: "https://supermercado-5350b-default-rtdb.firebaseio.com",
    projectId: "supermercado-5350b",
    storageBucket: "supermercado-5350b.appspot.com",
    messagingSenderId: "585469451890",
    appId: "1:585469451890:web:d10ab61c5a222100152ceb",
    measurementId: "G-8FNTG2SW85"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  // Conectar un Google - autenticación
  export const google = new GoogleAuthProvider();
  // Initialize Cloud Firestore and get a reference to the service
  export const dataBase = getFirestore(app);

