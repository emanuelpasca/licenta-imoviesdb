import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "../../components/movie-card/MovieCard";

const TopTitlesPage = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`https://imdb-api.com/en/API/${query}/k_435ffk04`)
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies.items);
      });
  }, [query]);

  return (
    <div className="flex justify-center">
      <div className="grid gap-0 grid-cols-10">
        {movies.map((movie, index) => {
          return (
            <div key={movie.id} className="relative">
              <div className="absolute z-10 top-2 left-2 text-3xl text-red-500 font-mono">
                {index + 1}
              </div>
              <div className="relative z-0">
                <MovieCard key={movie.id} movie={movie}></MovieCard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopTitlesPage;
