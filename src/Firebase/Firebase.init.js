// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5I3m94osLPTrJtv10TzsMAS2XW0fDYmY",
  authDomain: "travel-guru-c6d34.firebaseapp.com",
  projectId: "travel-guru-c6d34",
  storageBucket: "travel-guru-c6d34.appspot.com",
  messagingSenderId: "1081625440422",
  appId: "1:1081625440422:web:bff066be9515d684958467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app