import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQG-9LGq4U2aSZQa91NFaXGASBA_0YRI8",
    authDomain: "qutcalendar-a782c.firebaseapp.com",
    databaseURL: "https://qutcalendar-a782c.firebaseio.com",
    projectId: "qutcalendar-a782c",
    storageBucket: "qutcalendar-a782c.appspot.com",
    messagingSenderId: "436898003477",
    appId: "1:436898003477:web:2f6a7fcfee59b8d7e1ec1c",
    measurementId: "G-J2Y1MP9VC1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default };


