import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "yt-blog-project.firebaseapp.com",
    projectId: "yt-blog-project",
    storageBucket: "yt-blog-project.firebasestorage.app",
    messagingSenderId: "596556127597",
    appId: "1:596556127597:web:5966a260f805398e708e64",
    measurementId: "G-JL2RMCPHH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }