import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDy5WU9qdjmSOedB0or2JtBfgWstPoLT3E",
    authDomain: "chit-chat-b5ae9.firebaseapp.com",
    projectId: "chit-chat-b5ae9",
    storageBucket: "chit-chat-b5ae9.appspot.com",
    messagingSenderId: "552556866201",
    appId: "1:552556866201:web:2d8a88d1e597ab43372608",
  })
  .auth();
