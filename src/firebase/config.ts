import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9wexCHkmtv-G8tsKyUVaFbO-vtuaFff0",
  authDomain: "live-tracker-6b2d8.firebaseapp.com",
  projectId: "live-tracker-6b2d8",
  storageBucket: "live-tracker-6b2d8.firebasestorage.app",
  messagingSenderId: "491275493669",
  appId: "1:491275493669:web:63f396a3e5719307b0facc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);