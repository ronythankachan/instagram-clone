// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMlq0GKkUWhx_fYWC-n4NhXKPog5sSWJY",
  authDomain: "insta-clone-99394.firebaseapp.com",
  projectId: "insta-clone-99394",
  storageBucket: "insta-clone-99394.appspot.com",
  messagingSenderId: "740850123028",
  appId: "1:740850123028:web:729ccff95ecf4b9bb4c201",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
