import MovieCard from "../../components/movie-card/MovieCard";
import { useUserFavorites } from "../../contexts/UserFavoritesContext";
import axios from "axios";

const FavoritesPage = () => {
  const { userFavorites } = useUserFavorites();

  function fetchData() {
    axios
      .get("http://fd5b-35-185-48-17.ngrok.io")
      .then((response) => {
        console.log(response.data.recommendations);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClick() {
    fetchData();
  }

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
        <button className="btn btn-primary" onClick={handleClick}>
          TEST REQUEST
        </button>
      </div>
    </div>
  );
};

export default FavoritesPage;
