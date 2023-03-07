import { API_KEY } from "./config";
// import { add, remove, whereQuery } from "../../configs/firebase/actions";
import { add, remove, whereQuery } from "./firebase/actions";

const useFetchMovies = () => {
  const AJAX = async (type) => {
    try {
      const res = await fetch(`https://imdb-api.com/en/API/${type}/${API_KEY}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return AJAX;
};

export default useFetchMovies;

export const addToFavorites = (
  user,
  movie,
  userFavorites,
  setUserFavorites,
  isFavorite,
  setIsFavorite
) => {
  if (!isFavorite) {
    add("favorites", {
      userId: user.uid,
      title: {
        id: movie.id,
        image: movie.image,
        imDbRating: movie.imDbRating,
        title: movie.title,
        genreList: movie.genres,
        keywords: movie.keywords,
        plot: movie.plot,
      },
    });

    setIsFavorite(true);

    // UPDATE USER FAVORITES ARR
    setUserFavorites((prev) => [
      ...prev,
      {
        userId: user.uid,
        title: {
          id: movie.id,
          image: movie.image,
          imDbRating: movie.imDbRating,
          title: movie.title,
          genreList: movie.genres,
          keywords: movie.keywords,
          plot: movie.plot,
        },
      },
    ]);
  } else {
    whereQuery("favorites", "title.id", movie.id).then((result) => {
      const [title] = result;
      remove("favorites", title.id).then((removed) => {
        setIsFavorite(false);
        setUserFavorites((prev) => {
          const newFavorites = prev.filter((item) => item.title.id != movie.id);
          return newFavorites;
        });
      });
    });
  }
};
