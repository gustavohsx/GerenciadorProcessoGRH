import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js"
import {
    getFirestore, 
    doc, 
    addDoc, 
    collection,
    getDocs, 
    getDoc,
    query,
    where,
    deleteDoc,
    updateDoc
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js'


import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyBUl0mMegKMvBo4KLTJEMa8-bmJ9i-_yB4",
    authDomain: "gerencia-processos.firebaseapp.com",
    projectId: "gerencia-processos",
    storageBucket: "gerencia-processos.appspot.com",
    messagingSenderId: "636225470486",
    appId: "1:636225470486:web:c89aa7ba3c570d19aa7537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
    db, doc, addDoc, collection, getDocs, getDoc, query, where, deleteDoc, updateDoc, auth,
    signInWithEmailAndPassword, onAuthStateChanged
    
}