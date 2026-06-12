
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBNlonYY3DOkB4DFuXkHUnnaMNCERv8llE",
    authDomain: "e-commerce-react-52584.firebaseapp.com",
    projectId: "e-commerce-react-52584",
    storageBucket: "e-commerce-react-52584.firebasestorage.app",
    messagingSenderId: "129535250186",
    appId: "1:129535250186:web:7a6a3d9c98c6f095e974f3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)