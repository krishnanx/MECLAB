import { useContext, createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../library/Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({});

  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider);
  // };
  const logOut = () => {
    signOut(auth);
  };
  // useEffect(()=>{
  //   const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
  //     setUser(currentUser);
  //     //console.log('user',currentUser)
  //   });
  //   return()=> {unsubscribe();};
  // },[]);
  // const googleSignUp = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider);
  // };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //console.log('user',currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ logOut, user, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
