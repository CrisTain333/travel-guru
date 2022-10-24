import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider 
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photourl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    })
      .then(() => {})
      .catch((error) => {});
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const sininCurrentUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);


const googleLogin = ()=>{
  setLoading(true);
  return signInWithPopup(auth , provider)
}

const facebookLogin  = ()=>{
  setLoading(true)
  return signInWithPopup(auth,facebookProvider);
}
  return (
    <AuthContext.Provider
      value={{
        createUser,
        setLoading,
        updateUserProfile,
        sininCurrentUser,
        user,
        singout,
        loading,
        googleLogin,
        facebookLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
