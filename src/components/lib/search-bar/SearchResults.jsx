import { useEffect, useState } from "react";
import { API_KEY } from "../../../configs/config";
import MovieCard from "../../movie-card/MovieCard";

const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/SearchTitle/${API_KEY}/${props.input}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      });
  }, [props.input]);

  if (loading)
    return (
      <div className="mt-10 h-screen w-96 bg-secondary absolute">
        <div className="flex justify-center">
          <div>
            <button className="btn btn-primary btn-circle loading border-transparent"></button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="mt-10 h-screen w-64 right-96 bg-secondary overflow-y-scroll absolute">
      {results.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
};
export default SearchResults;
