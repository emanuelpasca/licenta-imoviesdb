import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="p-2 mt-2">
      <div className="card card-normal w-36 h-72 bg-secondary shadow-xl rounded-none">
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
            <div className="flex space-x-2">
              <div className="flex-initial cursor-pointer">
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div className="flex-initial cursor-pointer">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="truncate overflow-hidden">
            <strong>{props.movie.title}</strong>
          </div>
          <div className="flex justify-between">
            <div className="space-x-2 cursor-pointer">
              <i className="fa-solid fa-play"></i>
              <label className="text-xs cursor-pointer">Play trailer</label>
            </div>
            <Link to={`/title/${props.movie.id}`}>
              <div className="cursor-pointer">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
