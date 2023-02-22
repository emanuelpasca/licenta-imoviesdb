import { createContext, useContext, useEffect, useState } from "react";
import { whereQuery } from "../configs/firebase/actions";
import { useUserAuth } from "./AuthContext";

const userFavoritesContext = createContext();

export const UserFavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState(null);
  const { user } = useUserAuth();

  useEffect(() => {
    if (user) {
      whereQuery("favorites", "userId", user.uid).then((results) => {
        setUserFavorites(results);
      });
    } else {
      setUserFavorites(null);
    }
  }, [user]);

  return (
    <userFavoritesContext.Provider value={{ userFavorites, setUserFavorites }}>
      {children}
    </userFavoritesContext.Provider>
  );
};

export const useUserFavorites = () => {
  return useContext(userFavoritesContext);
};
