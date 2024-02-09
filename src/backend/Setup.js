import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDrT3IuHVc38by9YXze6nen5RfnZjYPIZ0",
  authDomain: "orcheyex.firebaseapp.com",
  projectId: "orcheyex",
  storageBucket: "orcheyex.appspot.com",
  messagingSenderId: "766038334591",
  appId: "1:766038334591:web:4be969a788d6ac9b92f34a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);