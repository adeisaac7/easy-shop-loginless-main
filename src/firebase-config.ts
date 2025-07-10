import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhCLQI02l4J27RLaz5mbfB1Q5kGxXHttU",
  authDomain: "passwordless-9f238.firebaseapp.com",
  projectId: "passwordless-9f238",
  storageBucket: "passwordless-9f238.firebasestorage.app",
  messagingSenderId: "817362731978",
  appId: "1:817362731978:web:ff4b6cb1e9fb0b72510533"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };