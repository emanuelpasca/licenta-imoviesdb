import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CastRow from "../../components/cast/CastRow";
import MoviesRow from "../../components/movie-card/MoviesRow";

const TitlePage = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [actorList, setActorList] = useState([]);
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    if (!id) return;
    fetch(`https://imdb-api.com/en/API/Title/k_435ffk04/${id}`)
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
        setGenreList(movie.genreList);
        setActorList(movie.actorList);
        setSimilars(movie.similars);
        setLoading(false);

        fetch(`https://imdb-api.com/API/Trailer/k_435ffk04/${id}`)
          .then((res) => res.json())
          .then((trailer) => setTrailer(trailer.linkEmbed));
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center p-2">
        <button className="btn btn-primary btn-circle loading border-transparent"></button>
      </div>
    );

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <section className="flex flex-row justify-center p-1">
            {/* stanga */}
            <div className="basis-11/12">
              <div className="text-4xl text-white">{movie.title}</div>
              <div className="flex flex-row mt-3">
                <div className="mr-1 text-gray-500">{movie.type},</div>
                <div className="mr-1 text-gray-500">
                  {movie.year}
                  {movie.tvSeriesInfo ? `-${movie.tvSeriesInfo.yearEnd}` : ""},
                </div>
                <div className="mr-1 text-gray-500">{movie.contentRating}</div>
              </div>
            </div>
            {/* dreapta */}
            <div className="flex flex-row ">
              <div>
                <div className="text-l uppercase text-white mt-5">Rating</div>
                <div className="">
                  <div>
                    <i className="fa-solid fa-star text-red-500"></i>
                    <label className="ml-2">{movie.imDbRating}</label>
                  </div>
                  <div className="text-xs text-gray-500">
                    {movie.imDbRatingVotes} votes
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row ">
              <div>
                <div className="text-l uppercase text-white mt-5">
                  METACRITIC
                </div>
                <div className="text-center text-white">
                  <div>
                    <label
                      className={
                        movie.metacriticRating > 0
                          ? "bg-green-500"
                          : "bg-primary"
                      }
                    >
                      {movie.metacriticRating}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex justify-center">
            <div>
              <figure>
                <img className="h-96 w-56" src={movie.image}></img>
              </figure>
            </div>
            <div>
              <iframe
                src={trailer}
                width="640"
                height="386"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                frameBorder="no"
                scrolling="no"
              ></iframe>
            </div>
          </section>
          <section className="mt-5">
            <div className="flex justify-between">
              <div>
                {genreList.map((genre) => (
                  <button
                    key={genre.key}
                    className="btn btn-outline btn-primary rounded-full mr-2"
                  >
                    {genre.value}
                  </button>
                ))}
              </div>
              <div>
                <button className="btn btn-secondary basis-2/6">
                  <i className="fa-solid fa-bookmark"></i>
                  <label className="ml-3">Add to watchlist</label>
                </button>
              </div>
            </div>
            <div className="mt-5 mb-5 max-w-4xl">
              <label className="">{movie.plot}</label>
            </div>
            <hr className="color-red-500"></hr>
            <div className="mt-5 mb-5">
              <label className="text-red-700 mr-1 text-xl">|</label>
              <label className="color-white text-xl">Director</label>
              <label className="ml-5">{movie.directors}</label>
            </div>
            <hr className="color-red-500"></hr>
          </section>
          <section>
            <div className="mt-5 mb-5">
              <label className="text-red-700 mr-1 text-xl">|</label>
              <label className="color-white text-xl">Cast</label>

              {/* <CastList cast={actorList.slice(0, 6)}></CastList> */}
              <CastRow cast={actorList}></CastRow>
            </div>
          </section>
          <section>
            <MoviesRow
              description={"Similar titles"}
              movies={similars}
              resultsPerPage={6}
            ></MoviesRow>
          </section>
        </div>
      </div>
    </>
  );
};

export default TitlePage;
