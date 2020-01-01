import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = { 
    apiKey: "AIzaSyDCmQmPbImbY6J2qGs91pIf8nPEFJabGfY", 
    authDomain: "fir-auth-a06fa.firebaseapp.com", 
    databaseURL: "https://fir-auth-a06fa.firebaseio.com", 
    projectId: "fir-auth-a06fa", 
    storageBucket: "fir-auth-a06fa.appspot.com", 
    messagingSenderId: "192548534367", 
    appId: "1:192548534367:web:9404f4d2501cb2af0d03ea", 
    measurementId: "G-FEXM8ETEEW" 
}; 
// Initialize Firebase 
firebase.initializeApp(config);
firebase.firestore.settings({timestampsInSnapshots: true});

export default firebase;