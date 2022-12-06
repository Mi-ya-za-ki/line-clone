import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-4J10blHxAYQtzWECmsJBaONyeHcsriQ",
  authDomain: "line-clone-react-41fa7.firebaseapp.com",
  projectId: "line-clone-react-41fa7",
  storageBucket: "line-clone-react-41fa7.appspot.com",
  messagingSenderId: "795658105988",
  appId: "1:795658105988:web:3bdf9c0aa98d8cb8a3fed1",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
