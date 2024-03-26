import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Auth } from "../utils/firebase/firebaseConfig";
import { InfoToast } from "../components/helpers/toast-container";

export const UserContext = createContext(null);

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setIsLoading(false);
      if (currentUser) setUser(currentUser);
      else setUser(null);
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);
  async function logOut() {
    try {
      await signOut(Auth);
      InfoToast({ message: "Logged Out Successfully" });
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }
  const values = { user, logOut };
  return (
    <UserContext.Provider value={values}>
      {!isLoading && children}
    </UserContext.Provider>
  );
}
