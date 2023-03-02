import { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import { whereQuery } from "../../configs/firebase/actions";
import useUserDetails from "../../hooks/UserDetailsHook";

const FavoritesPage = () => {
  const { getCurrentUserDetails } = useUserDetails();
  const { userId } = getCurrentUserDetails();
  const [userFavorites, setUserFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    whereQuery("favorites", "userId", userId).then((data) => {
      if (!data) return;

      setUserFavorites(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center p-2">
        <button className="btn btn-primary btn-circle loading border-transparent"></button>
      </div>
    );

  if (userFavorites.length === 0)
    return (
      <div className="flex justify-center">
        <div className="mx-1 text-2xl">You have no favorites yet.</div>
      </div>
    );

  return (
    <div className="flex justify-center">
      <div>
        <div className="p-1 flex text-xl">
          <div className="text-red-700">|</div>
          <div className="mx-1 text-2xl">Favorites</div>
        </div>
        <div className="flex">
          <div className="grid grid-cols-10">
            {userFavorites.map((favorite) => {
              return (
                <MovieCard key={favorite.id} movie={favorite.title}></MovieCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
