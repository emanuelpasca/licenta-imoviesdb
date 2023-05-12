import { useEffect, useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { useUserFavorites } from "../../contexts/UserFavoritesContext";
import { getRecommendations } from "../../configs/actions";
import MoviesRow from "../movie-card/MoviesRow";
import { API_KEY } from "../../configs/config";

const RecommendationRow = () => {
  const { user } = useUserAuth();
  const { userFavorites } = useUserFavorites();
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userFavorites) {
      async function fetchMovieDetails(imdbId) {
        const response = await fetch(
          `https://imdb-api.com/en/API/Title/${API_KEY}/${imdbId}`
        );
        const movieDetails = await response.json();
        return movieDetails;
      }

      const randomFavoriteMovie = Math.floor(
        Math.random() * userFavorites.length
      );

      async function fetchRecommendedMovies() {
        const recommendedMoviesArray = await getRecommendations(
          userFavorites[4].title.keywords.replaceAll(" ", "-").split(",")
        );
        const movieDetailsArray = await Promise.all(
          recommendedMoviesArray.map((imdbId) => fetchMovieDetails(imdbId))
        );
        setRecommendedMovies(movieDetailsArray);
        setLoading(false);
      }

      fetchRecommendedMovies();
    }
  }, []);

  if (!userFavorites) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex justify-center p-2">
        <button className="btn btn-primary btn-circle loading border-transparent"></button>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <MoviesRow
          description={"Recommended based on your favorites"}
          movies={recommendedMovies}
          resultsPerPage={10}
        ></MoviesRow>
      ) : null}
    </div>
  );
};

export default RecommendationRow;
