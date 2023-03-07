import MoviesRow from "../../components/movie-card/MoviesRow";

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
          className="opacity-30 w-screen "
          src="https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
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
      {/* <MoviesRow
        resultsPerPage={10}
        withFetch={true}
        description={"Coming Soon"}
      ></MoviesRow> */}
    </div>
  );
};

export default Landing;
