import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs  } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzqr6yuhfU3IFln4kcGpuOTBugFhjO3Sk",
    authDomain: "disney-clone-62869.firebaseapp.com",
    projectId: "disney-clone-62869",
    storageBucket: "disney-clone-62869.appspot.com",
    messagingSenderId: "14946320307",
    appId: "1:14946320307:web:13e7000d83a3ee790355c6",
    measurementId: "G-YE9FVT11MS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { db, auth, provider, storage, collection, doc, getDoc, getDocs  };
export default db;

