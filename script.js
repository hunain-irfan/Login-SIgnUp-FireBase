
                // Firbase Authentication of Email/Password Started

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import {
  getFirestore,
  getDocs,
  collection, 
  addDoc
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-uG5San_LiZ3XMcvmXf6A8uGCQuyrDhE",
  authDomain: "blog-app-b877f.firebaseapp.com",
  projectId: "blog-app-b877f",
  storageBucket: "blog-app-b877f.appspot.com",
  messagingSenderId: "717407366154",
  appId: "1:717407366154:web:46c57cdff587e0f8dd03f3",
  measurementId: "G-YLM0JV28YY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const switchToSignUp = document.getElementById('signUp-switch');
const switchToSignIn = document.getElementById('signIn-switch');
const registerDiv = document.querySelector('.register-div');
const loginDiv = document.querySelector('.login-div');
const logout = document.getElementById('logout');
const todoDiv = document.getElementById('todo-div');

// console.log(todoDiv)


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    loginDiv.style.display = 'none';
    registerDiv.style.display = 'none';
    todoDiv.style.display = 'block';
    // ...
  } else {
    // User is signed out
    todoDiv.style.display = 'none';
    loginDiv.style.display = 'flex';
    // registerDiv.style.display = 'flex';
    // ...
  }
});




switchToSignIn.addEventListener('click', () => {
  registerDiv.style.display = 'none';
  loginDiv.style.display = 'flex'
})


switchToSignUp.addEventListener('click', () => {
  loginDiv.style.display = 'none';
  registerDiv.style.display = 'flex'
})
// console.log('Register Form  ', registerForm);

registerForm?.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e)
  const userInfo = {
    fullname: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value
  }

  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('User Registered')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('User not Registered' + errorMessage)
      
      // ..
    });
  })

  loginForm?.addEventListener('submit', e => {
    e.preventDefault()
  console.log(e)
  const userInfo = {
    email: e.target[0].value,
    password: e.target[1].value
  }
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // alert('User Logged in')

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('User not found' + errorMessage)

    });
})

logout?.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert('User signed out')
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    alert('User not signed out', error)
  });
})
registerDiv.style.display = 'none';

document.addEventListener('DOMContentLoaded', function () {
  // Your code here
});


// Database section Started


// import { collection, addDoc } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


