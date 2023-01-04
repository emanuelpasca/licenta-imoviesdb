import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <>
      <div className="flex">
        {props.movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>;
        })}
      </div>
    </>
  );
};

export default MovieList;
