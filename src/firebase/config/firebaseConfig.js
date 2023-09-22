import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBtASkDyjhaVCCpUZugxcijQs-hplESEm0",
  authDomain: "entregafinalcoderhousereactjs.firebaseapp.com",
  projectId: "entregafinalcoderhousereactjs",
  storageBucket: "entregafinalcoderhousereactjs.appspot.com",
  messagingSenderId: "1022074483175",
  appId: "1:1022074483175:web:216cb0b41cdc0ecae48d42"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
