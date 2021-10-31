import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //   google sign in
  const signInGoogle = () => {
    return signInWithPopup(auth, provider).catch((error) => {
      setError(error.message);
    });
  };
  //

  // observed user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // new user register
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
  };

  return {
    setIsLoading,
    isLoading,
    user,
    error,
    signInGoogle,
    logOut,
    handleRegister,
    handleLogin,
  };
};

export default useFirebase;
