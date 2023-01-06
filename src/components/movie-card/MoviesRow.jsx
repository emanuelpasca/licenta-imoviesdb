import { useEffect, useState } from "react";
import useFetchMovies from "../../configs/actions";
import { RESULTS_PER_PAGE } from "../../configs/config";
import MovieList from "./MovieList";
import "./Movies.css";

const MoviesRow = (props) => {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const getMovies = useFetchMovies();

  useEffect(() => {
    if (props.withFetch) {
      getMovies(`${props.description.replaceAll(" ", "")}`)
        .then((movies) => {
          if (movies.errorMessage) {
            console.log(movies.errorMessage);
            return;
          }

          setMovies(movies.items);
          setDisplayedMovies(movies.items.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMovies(props.movies);
      setDisplayedMovies(props.movies.slice(0, 6));
      setLoading(false);
    }
  }, [props.movies]);

  const nextPageClickHandler = () => {
    const start = page * props.resultsPerPage; //10;
    const end = (page + 1) * props.resultsPerPage; //20;
    setDisplayedMovies(movies.slice(start, end));
    setPage(page + 1);
  };

  const previousPageClickHandler = () => {
    const start = (page - 2) * props.resultsPerPage; //0; 10-20 pagina 2
    const end = (page - 1) * props.resultsPerPage; //9;
    setDisplayedMovies(movies.slice(start, end));
    setPage(page - 1);
  };

  if (loading)
    return (
      <div className="flex justify-center p-2">
        <button className="btn btn-primary btn-circle loading border-transparent"></button>
      </div>
    );

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="p-1 flex text-xl">
            <div className="text-red-700">|</div>
            <div className="mx-1 text-2xl">{props.description || ""}</div>
          </div>
          <div className="flex justify-center">
            <div className="movie-container">
              {page > 1 && (
                <button
                  className="btn btn-secondary btn-square btn-outline movie-button-left"
                  onClick={previousPageClickHandler}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              )}
              <MovieList movies={displayedMovies}></MovieList>
              {movies.length > 10 &&
                (page - 1) * props.resultsPerPage <
                  movies.length - props.resultsPerPage && (
                  <button
                    className="btn btn-secondary btn-square btn-outline movie-button-right"
                    onClick={nextPageClickHandler}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesRow;
