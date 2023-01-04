import { useEffect, useState } from "react";
import useFetchMovies from "../../configs/actions";
import { RESULTS_PER_PAGE } from "../../configs/config";
import MovieList from "./MovieList";

const MoviesRow = (props) => {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const getMovies = useFetchMovies();

  useEffect(() => {
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
  }, []);

  const nextPageClickHandler = () => {
    const start = page * RESULTS_PER_PAGE; //10;
    const end = (page + 1) * RESULTS_PER_PAGE; //20;
    setDisplayedMovies(movies.slice(start, end));
    setPage(page + 1);
  };

  const previousPageClickHandler = () => {
    const start = (page - 2) * RESULTS_PER_PAGE; //0; 10-20 pagina 2
    const end = (page - 1) * RESULTS_PER_PAGE; //9;
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
      <div className="ml-10 flex justify-center">
        <div>
          <div className="p-1 flex text-xl">
            <div className="text-red-700">|</div>
            <div className="mx-1">{props.description}</div>
          </div>
          <div className="flex">
            {page > 1 && (
              <button
                className="btn btn-primary btn-square h-72"
                onClick={previousPageClickHandler}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}
            <MovieList movies={displayedMovies}></MovieList>
            {movies.length > 10 && (
              <button
                className="btn btn-primary btn-square h-72"
                onClick={nextPageClickHandler}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesRow;
