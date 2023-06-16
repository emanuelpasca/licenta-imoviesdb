import MovieCard from "../../components/movie-card/MovieCard";
import { getRecommendations } from "../../configs/actions";
import { useUserFavorites } from "../../contexts/UserFavoritesContext";
import axios from "axios";

const FavoritesPage = () => {
  const { userFavorites } = useUserFavorites();

  // function fetchData() {
  //   axios
  //     .post("http://127.0.0.1:5000/", {
  //       keywords: ["cacat", "pisat", "gunfight", "shootout", "gun-battle"],
  //     })
  //     .then((response) => {
  //       console.log(response.data.recommendations);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  function handleClick() {
    getRecommendations(
      userFavorites[0].title.keywords.replaceAll(" ", "-").split(",")
    )
      .then((recommendations) => {
        console.log(recommendations);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (userFavorites.length === 0)
    return (
      <div className="flex justify-center">
        <div className="mx-1 text-2xl">You have no favorites yet.</div>
      </div>
    );

  return (
    <div className="flex ml-32">
      <div>
        <div className="p-1 flex text-xl">
          <div className="text-red-700">|</div>
          <div className="mx-1 text-2xl">Your favorites</div>
        </div>
        <div className="flex">
          {/* <div className="grid grid-cols-10"> */}
          <div className="">
            {userFavorites.map((favorite) => {
              return (
                <div className="flex" key={favorite.id}>
                  <div className="">
                    <MovieCard
                      key={favorite.id}
                      movie={favorite.title}
                    ></MovieCard>
                  </div>
                  <div className="mt-3 w-3/4">
                    <div className="text-xl">{favorite.title.title}</div>
                    <div className="text-gray-500 mt-2">
                      {favorite.title.type}, {favorite.title.year}
                    </div>
                    <div className="text-gray-500 mt-1">
                      {favorite.title.genreList}
                    </div>
                    <div className=" overflow-x-clip mt-1 max-w-8xl">
                      {favorite.title.plot}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          TEST REQUEST
        </button>
      </div>
    </div>
  );
};

export default FavoritesPage;
