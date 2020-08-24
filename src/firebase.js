import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnoP1kr8iP_z_lFEHJ7XMc4bq5hdXI2qw",
    authDomain: "tinder-clone-eb9fb.firebaseapp.com",
    databaseURL: "https://tinder-clone-eb9fb.firebaseio.com",
    projectId: "tinder-clone-eb9fb",
    storageBucket: "tinder-clone-eb9fb.appspot.com",
    messagingSenderId: "923172615912",
    appId: "1:923172615912:web:31662e1c25d9055dfa7b5d",
    measurementId: "G-ZJM4GYQ0JC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;