import { initializeApp } from "firebase";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX0XKAJaa5qi7-1DfcQ6oFOQ1yKQ3FCIc",
  authDomain: "next-post-67642.firebaseapp.com",
  projectId: "next-post-67642",
  storageBucket: "next-post-67642.appspot.com",
  messagingSenderId: "977825735344",
  appId: "1:977825735344:web:25963c039911588d515175",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const storage = firebase.storage();
export { app, storage };
