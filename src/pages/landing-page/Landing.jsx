import { useEffect } from "react";
import MoviesRow from "../../components/movie-card/MoviesRow";
import { useUserFavorites } from "../../contexts/UserFavoritesContext";
import RecommendationRow from "../../components/recommendation/RecommendationRow";

const Landing = () => {
  return (
    <div className="">
      <div className="flex justify-center h-96 mb-28">
        <div className="absolute top-48 left-40 text-4xl font-mono">
          Welcome.
        </div>
        <div className="absolute top-60 left-40 text-4xl font-mono">
          Search millions of movies, TV shows and all your favorite actors.
        </div>
        <img
          className="opacity-50 w-screen "
          src="src\assets\landingbg.png"
        ></img>
      </div>
      {/* <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Top 250 Movies"}
      ></MoviesRow> */}
      {/* <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Top 250 TVs"}
      ></MoviesRow> */}
      <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Most Popular Movies"}
      ></MoviesRow>
      <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Most Popular TVs"}
      ></MoviesRow>
      <RecommendationRow></RecommendationRow>
      {/* <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Coming Soon"}
      ></MoviesRow> */}
    </div>
  );
};

export default Landing;
