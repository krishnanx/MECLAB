import { React, useEffect, useState } from "react";
import { collection, getDocs, getDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { AuthContext, UserAuth } from "../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBIGcQYAhCQjCK_oZqfhm83XgU-zT848Ag",
  authDomain: "mec-lab.firebaseapp.com",
  projectId: "mec-lab",
  storageBucket: "mec-lab.appspot.com",
  messagingSenderId: "220999562830",
  appId: "1:220999562830:web:f041ba45680a07c84e751f",
  measurementId: "G-80J7L7VECV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//initializw firestore
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const signIn = async () => {
  //onSigninSuccess = () => {}
  const provider = new GoogleAuthProvider();
  // signInWithPopup(auth, provider);
  provider.setCustomParameters({
    prompt: "select_account",
  });

  try {
    const result = await signInWithPopup(auth, provider).then(
      (result) => result.user
    );
    // console.log(result)
    // const user = result.user;
    // console.log(user)

    // const userRef = collection(db,"user")
    const collectionref = collection(db, "users");
    const snapshot =  doc(db, "users", result.uid);
    const docSnap = await getDoc(snapshot);
    // Check if the user already exists in Firestore
    // const userSnapshot = await checkIfUser
    // console.log(snapshot);
    if (docSnap.exists()) {
      // User already exists in Firestore
    } else {
      const userData = {
        name: result.displayName,
        first_name: result.displayName.split(" ").shift(),
        last_name: result.displayName.split(" ").slice(1).join(" "),
        email: result.email,
        profilePhoto: result.photoURL,
        uid: result.uid,
        // role: myrole,
      };
      // Add a new document in collection "cities"
      console.log("updated");
      await setDoc(doc(db, "users", result.uid), userData);
    }
    //   // console.log("user added successfully");
    // }
  } catch (error) {
    console.log(error);
    alert("Something is wrong, please check network connection");
  }
};
// const CheckIfUserExists = async (field, condition) => {
//   const collectionref = collection(db, field);
//   const exists = false;
//   try {
//     const snapshot = await getDocs(collectionref)
//       .then((response) =>
//         response.docs
//           .map((doc) => ({ data: doc.data(), id: doc.id }))
//           .filter((value) => value.data.email === condition)
//       )
//       .catch((error) => {
//         console.log(error.message);
//       });
//     console.log(snapshot);
//     return snapshot;
//   } catch (err) {
//     console.log(err);
//   }
// };
