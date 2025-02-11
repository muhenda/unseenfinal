import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgZEbdAxVzupkvQWB5OZ16rRYpf2YLeNE",
    authDomain: "unseen-agency.firebaseapp.com",
    projectId: "unseen-agency",
    storageBucket: "unseen-agency.appspot.com",
    messagingSenderId: "687413055184",
    appId: "1:687413055184:web:e0c192cae1e9c2b698d8d5",
    measurementId: "G-403QLVZD1G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, getDocs, collection, query, orderBy };