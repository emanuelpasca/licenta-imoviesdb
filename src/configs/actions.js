import { API_KEY, RECOMMENDATIONS_API } from "./config";
// import { add, remove, whereQuery } from "../../configs/firebase/actions";
import { add, remove, whereQuery } from "./firebase/actions";
import axios from "axios";

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
        type: movie.type,
        contentRating: movie.contentRating,
        year: movie.year,
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
          type: movie.type,
          contentRating: movie.contentRating,
          year: movie.year,
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

export const getRecommendations = (keywords) => {
  return axios
    .post(`${RECOMMENDATIONS_API}`, {
      keywords: keywords,
    })
    .then((res) => {
      return res.data.recommendations;
    });
};
