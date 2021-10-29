import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
  };
};

export default useFirebase;
