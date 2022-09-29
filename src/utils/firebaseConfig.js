// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC-0xFKBzcnkwPqawxeMx6LNSaTdM3kCNs",
authDomain: "disfruta-viajando.firebaseapp.com",
projectId: "disfruta-viajando",
storageBucket: "disfruta-viajando.appspot.com",
messagingSenderId: "479194020082",
appId: "1:479194020082:web:74aa7209fba3b1b29df86b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);