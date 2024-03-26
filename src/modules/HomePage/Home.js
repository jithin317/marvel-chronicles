import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../utils/firebase/firebaseConfig";

export default function Home() {
  onAuthStateChanged(Auth, (user) => {
    if (user) {
      console.log(user);
      console.log("Signed In");
    } else {
      console.log("no user signed in");
    }
  });
  return <div>HomePage</div>;
}
