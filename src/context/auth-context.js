import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Auth } from "../utils/firebase/firebaseConfig";

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

  const values = { user, setUser };
  return (
    <UserContext.Provider value={values}>
      {!isLoading && children}
    </UserContext.Provider>
  );
}
