import { useEffect } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import MoviesRow from "../../components/movie-card/MoviesRow";
import { useUserAuth } from "../../contexts/AuthContext";

const Landing = () => {
  return (
    <div>
      <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Top 250 Movies"}
      ></MoviesRow>
      <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Top 250 TVs"}
      ></MoviesRow>
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
      <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Coming Soon"}
      ></MoviesRow>
    </div>
  );
};

export default Landing;
