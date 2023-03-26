import { useEffect, useState } from "react";
import { RESULTS_PER_PAGE } from "../../configs/config";
import CastList from "./CastList";
import "./Cast.css";

const CastRow = (props) => {
  const [displayedActors, setDisplayedActors] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setDisplayedActors(props.cast.slice(0, 6));
    setPage(1);
  }, [props.cast]);

  const nextPageClickHandler = () => {
    const start = page * 6; //10;
    const end = (page + 1) * 6; //20;
    setDisplayedActors(props.cast.slice(start, end));
    setPage(page + 1);
  };

  const previousPageClickHandler = () => {
    const start = (page - 2) * 6; //0; 10-20 pagina 2
    const end = (page - 1) * 6; //9;
    setDisplayedActors(props.cast.slice(start, end));
    setPage(page - 1);
  };

  return (
    <>
      <div className="flex justify-between cast-container">
        {page > 1 && (
          <button
            className="btn btn-secondary btn-square btn-outline cast-button-left"
            onClick={previousPageClickHandler}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        <CastList cast={displayedActors}></CastList>
        {props.cast.length > 6 && (page - 1) * 6 < props.cast.length - 6 && (
          <button
            className="btn btn-secondary btn-square btn-outline cast-button-right"
            onClick={nextPageClickHandler}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default CastRow;
