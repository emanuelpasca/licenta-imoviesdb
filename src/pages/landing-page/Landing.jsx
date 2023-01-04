import MovieCard from "../../components/movie-card/MovieCard";
import MoviesRow from "../../components/movie-card/MoviesRow";

const Landing = () => {
  return (
    <div>
      <MoviesRow description={"Top 250 Movies"}></MoviesRow>
      <MoviesRow description={"Top 250 TVs"}></MoviesRow>
      <MoviesRow description={"Most Popular Movies"}></MoviesRow>
      <MoviesRow description={"Most Popular TVs"}></MoviesRow>
      <MoviesRow description={"Coming Soon"}></MoviesRow>
    </div>
  );
};

export default Landing;
