import { createContext, useContext, useEffect, useState } from "react";
import { whereQuery } from "../configs/firebase/actions";
import { useUserAuth } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

const userFavoritesContext = createContext();

export const UserFavoritesContextProvider = ({ children }) => {
  const { user } = useUserAuth();

  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    // Listen for changes in authentication state
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     whereQuery("favorites", "userId", user.uid).then((results) => {
    //       setUserFavorites(results);
    //       console.log("USER FAVORITES RESULTS:");
    //       console.log(results);
    //     });
    //   } else {
    //     setUserFavorites(null);
    //   }
    // });

    // // Unsubscribe from the listener when the component unmounts
    // return () => unsubscribe();

    const fetchFavorites = async () => {
      if (user) {
        const favorites = await whereQuery("favorites", "userId", user.uid);
        setUserFavorites(favorites);
      } else {
        setUserFavorites(null);
      }
    };

    fetchFavorites();
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
