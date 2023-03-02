import React, { createContext, useEffect, useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../configs/firebase";
import { add } from "../configs/firebase/actions";

const logIn = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const logOut = async () => signOut(auth);

const signUp = async (email, password, username) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await add("users", {
    userId: userCredentials.user.uid,
    email,
    username,
  });
};

const userAuthContext = createContext({ user: {}, logIn, signUp, logOut });

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // User is logged in
        setUser(currentuser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
