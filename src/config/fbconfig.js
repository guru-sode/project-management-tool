import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = { 
    apiKey: "AIzaSyCC_0FDyXWR4-0er-i3JDKB0FXk4Y7ZZcs",
    authDomain: "project-management-tool-38651.firebaseapp.com",
    databaseURL: "https://project-management-tool-38651.firebaseio.com",
    projectId: "project-management-tool-38651",
    storageBucket: "project-management-tool-38651.appspot.com",
    messagingSenderId: "345764564358",
    appId: "1:345764564358:web:07f6a50bd8a8e400d0b007",
    measurementId: "G-9DTZZ3V7BE" 
}; 
// Initialize Firebase 
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;