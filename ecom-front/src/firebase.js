import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCBXfON4HDszH785cvvqgZgnm2K4SMKdzg",
  authDomain: "ecommerce-cc0e4.firebaseapp.com",
  projectId: "ecommerce-cc0e4",
  storageBucket: "ecommerce-cc0e4.appspot.com",
  messagingSenderId: "387001614977",
  appId: "1:387001614977:web:b5a978b6942c426b29c380"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//export auth and google provider

export const auth = firebase.auth()
export const googleAuthProvider= new firebase.auth.GoogleAuthProvider()