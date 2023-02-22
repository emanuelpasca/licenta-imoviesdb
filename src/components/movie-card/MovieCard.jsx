// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { add } from "../../configs/firebase/actions";
// import { useUserAuth } from "../../contexts/AuthContext";
// import useUserDetails from "../../hooks/UserDetailsHook";
// import { PagePaths } from "../../pages/pages";

const MovieCard = (props) => {
  // const { user } = useUserAuth();
  // const navigate = useNavigate();
  // const [isFavorite, setIsFavorite] = useState(false);

  // const addToFavorites = () => {
  //   if (!user) {
  //     return navigate(PagePaths.LOGIN);
  //   }

  //   if (!isFavorite) {
  //     const { getCurrentUserDetails } = useUserDetails();
  //     const { userId } = getCurrentUserDetails();
  //     add("favorites", {
  //       userId: userId,
  //       title: props.movie,
  //     });
  //     setIsFavorite(true);
  //   }
  // };

  return (
    <div className="p-2 mt-2">
      <div className="card card-normal w-36 bg-secondary shadow-xl rounded-none">
        <Link to={`/title/${props.movie.id}`}>
          <figure>
            <img className="h-52 w-36" src={props.movie.image} alt="Shoes" />
          </figure>
        </Link>
        <div className="p-1">
          <div className="flex justify-between">
            <div className="space-x-1">
              <i className="fa-solid fa-star text-red-500"></i>
              <label>{props.movie.imDbRating || ""}</label>
            </div>
            {/* <div className="flex space-x-2">
              <div className="flex-initial cursor-pointer">
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div
                className="flex-initial cursor-pointer"
                onClick={addToFavorites}
              >
                <i
                  className={
                    isFavorite
                      ? "fa-solid fa-heart text-red-500"
                      : "fa-solid fa-heart "
                  }
                ></i>
              </div>
            </div> */}
            <Link to={`/title/${props.movie.id}`}>
              <div className="cursor-pointer">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </Link>
          </div>
          <div className="truncate overflow-hidden">
            <strong>{props.movie.title}</strong>
          </div>
          {/* <div className="flex justify-between">
            <div className="space-x-2 cursor-pointer">
              <i className="fa-solid fa-play"></i>
              <label className="text-xs cursor-pointer">Play trailer</label>
            </div>
            <Link to={`/title/${props.movie.id}`}>
              <div className="cursor-pointer">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
