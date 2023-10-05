import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyAYPWVb2Cd6XewzqKBWN-J5MbnMJA7R06o",
  authDomain: "devlink-67f83.firebaseapp.com",
  projectId: "devlink-67f83",
  storageBucket: "devlink-67f83.appspot.com",
  messagingSenderId: "699418439388",
  appId: "1:699418439388:web:09af124228cfc902628e19"
  })

  
  export const auth = getAuth(app);
  export default app;