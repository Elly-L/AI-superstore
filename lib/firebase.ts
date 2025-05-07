import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDpYMpMdLijBa8BDrwIhwAFVuYlZqz5TWs",
  authDomain: "ai--superstore.firebaseapp.com",
  projectId: "ai--superstore",
  storageBucket: "ai--superstore.firebasestorage.app",
  messagingSenderId: "703379090251",
  appId: "1:703379090251:web:32c5eb9863dee3cc2cd6ce",
  measurementId: "G-00X8DES82P",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }
