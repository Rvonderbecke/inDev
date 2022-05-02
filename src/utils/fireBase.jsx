import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//import {  getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyA9NzPeLs7g8xWo17DNHWU7rKX_mWNGrqI",
    authDomain: "simple-life-app.firebaseapp.com",
    projectId: "simple-life-app",
    storageBucket: "simple-life-app.appspot.com",
    messagingSenderId: "1034500165332",
    appId: "1:1034500165332:web:e31e7b573e8d72b2267541",
    measurementId: "G-MDBPHP7M3T" 
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);


export const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
      const user = result.user;
      console.log(user, token)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);

    // ...
  });
}
