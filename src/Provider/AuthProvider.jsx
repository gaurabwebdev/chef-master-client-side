import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (loggedUser) => {
      setLoading(false);
      setUser(loggedUser);
      console.log(loggedUser);
    });
    return () => {
      observer();
    };
  }, []);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userProfile = (name, url) => {
    const auth = getAuth();
    setLoading(true);
    console.log(auth.currentUser);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };
  const userEmail = (email) => {
    setLoading(true);
    return updateEmail(auth.currentUser, email);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    createUser,
    user,
    userProfile,
    userEmail,
    login,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
