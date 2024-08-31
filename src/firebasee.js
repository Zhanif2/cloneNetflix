import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzez6dHQIZt6kZhdjqKAYxUEs8yOlxqic",
  authDomain: "netflix-clone-f06d1.firebaseapp.com",
  projectId: "netflix-clone-f06d1",
  storageBucket: "netflix-clone-f06d1.appspot.com",
  messagingSenderId: "188201478712",
  appId: "1:188201478712:web:0d4a3746c484b85db9d4cd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};


const logout =  () =>{
    signOut (auth);
}


export {auth, db, login, signup, logout};