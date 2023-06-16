import { Link, useNavigate } from "react-router-dom";
import ProgressiveImage from "../lib/ProgressiveImage";

const MovieCard = (props) => {
  return (
    <div className="p-2 mt-2">
      <div className="card card-normal w-36 bg-secondary shadow-xl rounded-none">
        <Link to={`/title/${props.movie.id}`}>
          <ProgressiveImage
            src={props.movie.image}
            placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.drodd.com%2Fimages16%2Fdark-red8.jpg&f=1&nofb=1&ipt=30cec2f03096860e00f8170df486743b26704e4c911a3ad9042bfe3844e4f03e&ipo=images"
            size="h-52 w-36"
          ></ProgressiveImage>
        </Link>
        <div className="truncate overflow-hidden font-mono">
          {!props.bySearch && <strong>{props.movie.title}</strong>}
        </div>
        <div className="p-1">
          {!props.bySearch && (
            <div className="flex justify-between">
              <div className="space-x-1 font-mono">
                <i className="fa-solid fa-star text-red-500"></i>
                <label>{props.movie.imDbRating}</label>
              </div>
              <div>
                <Link to={`/title/${props.movie.id}`}>
                  <div className="cursor-pointer">
                    <i className="fa-solid fa-circle-info"></i>
                  </div>
                </Link>
              </div>

              {/* <div className="flex space-x-2">
              <div className="flex-initial cursor-pointer">
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div className="flex-initial cursor-pointer">
                <i
                  className={
                    isFavorite
                      ? "fa-solid fa-heart text-red-500"
                      : "fa-solid fa-heart "
                  }
                ></i>
              </div>
            </div> */}
            </div>
          )}
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
