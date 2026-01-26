
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuSeZXF6kkN4RQJa8cRSTnQmBFd00kmhQ",
  authDomain: "green-shop-n101-4034a.firebaseapp.com",
  projectId: "green-shop-n101-4034a",
  storageBucket: "green-shop-n101-4034a.firebasestorage.app",
  messagingSenderId: "1056002833562",
  appId: "1:1056002833562:web:dddc3e69aa896f04f4f323",
  measurementId: "G-R3QVDMV0BJ",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
};

