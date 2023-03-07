import { createContext, useContext, useEffect, useState } from "react";
import { whereQuery } from "../configs/firebase/actions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

const userFavoritesContext = createContext();

export const UserFavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        whereQuery("favorites", "userId", user.uid).then((results) => {
          setUserFavorites(results);
        });
      } else {
        setUserFavorites(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <userFavoritesContext.Provider
      value={{
        userFavorites,
        setUserFavorites,
      }}
    >
      {children}
    </userFavoritesContext.Provider>
  );
};

export const useUserFavorites = () => {
  return useContext(userFavoritesContext);
};
