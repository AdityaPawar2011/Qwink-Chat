import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database'; // Importing Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDIcYGXonCBkPoW4OAhyFsrF7F4R5O_z4k",
  authDomain: "qwink-chat.firebaseapp.com",
  projectId: "qwink-chat",
  storageBucket: "qwink-chat.firebasestorage.app",
  messagingSenderId: "34365399883",
  appId: "1:34365399883:web:532805adbbd3696e79bece",
  databaseURL: "https://qwink-chat-default-rtdb.asia-southeast1.firebasedatabase.app" // Adding Realtime Database URL
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app); // Exporting Realtime Database
