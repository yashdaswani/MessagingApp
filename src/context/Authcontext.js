import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {onAuthStateChanged } from "firebase/auth";
export const Authcontext=createContext();


export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
        unsub();
      };
    }, []);

    return (
        <Authcontext.Provider value={{ currentUser }}>
          {children}
        </Authcontext.Provider>
      );
    };