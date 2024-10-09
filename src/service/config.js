
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "eterna-joyas-60035.firebaseapp.com",
  projectId: "eterna-joyas-60035",
  storageBucket: "eterna-joyas-60035.appspot.com",
  messagingSenderId: "450743763939",
  appId: "1:450743763939:web:badf863c8d1e6d7f24d6d6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
