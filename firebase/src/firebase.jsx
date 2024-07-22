import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA3S7vISQCyGqiu0G1h6P6ln8NsyHKlfN0",
    authDomain: "react-firebase-app-f21e8.firebaseapp.com",
    projectId: "react-firebase-app-f21e8",
    storageBucket: "react-firebase-app-f21e8.appspot.com",
    messagingSenderId: "67016716895",
    appId: "1:67016716895:web:62e48de84268f33e17e1ea",
    measurementId: "G-BKDMC6EYLR",
    databaseURL: "https://react-firebase-app-f21e8-default-rtdb.firebaseio.com",

};

export const app = initializeApp(firebaseConfig)
