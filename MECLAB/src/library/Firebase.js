import { React, useEffect, useState } from "react";
import { collection, getDocs, getDoc, query, where } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { AuthContext, UserAuth } from "../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { updateDoc } from "firebase/firestore";
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

export const signUp = async () => {
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
    const snapshot = doc(db, "users", result.uid);
    const docSnap = await getDoc(snapshot);
    // Check if the user already exists in Firestore
    // const userSnapshot = await checkIfUser
    const userData = {
      name: result.displayName,
      first_name: result.displayName.split(" ").shift(),
      last_name: result.displayName.split(" ").slice(1).join(" "),
      email: result.email,
      profilePhoto: result.photoURL,
      uid: result.uid,
      // role: myrole,
    };
    console.log(snapshot);
    if (docSnap.exists()) {
      // User already exists in Firestore
      return docSnap.data()
    } else {
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

  /*   ADD INFO INTO DATABASE   */
  /*const fetchUserProfile = async () => {
    if (result.uid!==null) {
      console.log(result.uid);
      setLoading(true);
      getUser(currentUser?.uid).then((profile) => {
        setProfile(profile);
        // // console.log(snapshot.data())  
      });
      if ((profile && profile?.length === 0) || profile === null) {
        getUser(currentUser?.uid).then((profile) => {
          setProfile(profile);
          // // console.log(snapshot.data())
          if (profile?.role === "Organization"){
            history.push('/profile')
          }
        });
      }
      // setProfile(profileUser);
      setLoading(false);

  }
  };*/
};

export const addIp = async (profile, setProfile, ipAddress) => {
  
  try {
    // const result = {}; // You need to set result to some value or obtain it from somewhere
    const Id = profile.uid;
    console.log(ipAddress)
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const docRef = doc(db, "users", Id);
    //       const docSnapshot = await getDoc(docRef);

    //       if (docSnapshot.exists()) {
    //         // User already exists in Firestore
    //         console.log('User already exists:', docSnapshot.data());
    //       } else {
    //         console.log('User does not exist in Firestore.');
    //       }
    //     } catch (error) {
    //       console.error('Error fetching document:', error);
    //     }
    //   };

    //   fetchData();
    // }, [Id]);

    const docRef = doc(db, "users", Id);

    // Check if 'ipAddress' field exists in the document
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists() && docSnapshot.data().ipAddress) {
      console.log("IP Address already exists:", docSnapshot.data().ipAddress);
    } else {
      // If 'ipAddress' does not exist, add it to the document
      await updateDoc(docRef, {
        ipAddress: ipAddress,
        // Other fields you may want to update
      });
      console.log("IP Address added to Firestore!");
    }
    const updatedData = {
      ...profile, 
      ipAddress: ipAddress,
    };
    return updatedData;
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

// Call the functions as neede

/*                           */
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
export const getIpAddress = async (uid)=>{
  // const collectionref = collection(db, "users");
    const snapshot = doc(db, "users", uid);
    console.log(uid)
    // const link=snapshot;
    const dataSnap = await getDoc(snapshot)
    const response = dataSnap.data()
    console.log(response.ipAddress)
    return response.ipAddress;
}
