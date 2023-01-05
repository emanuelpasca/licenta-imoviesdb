import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TitlePage = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <section className="flex flex-row justify-center p-1">
            {/* stanga */}
            <div className="basis-11/12">
              <div className="text-5xl text-white">Lost</div>
              <div className="flex flex-row mt-3">
                <div className="mr-1 text-gray-500">TV-Series,</div>
                <div className="mr-1 text-gray-500">2004 - 2010</div>
              </div>
            </div>
            {/* dreapta */}
            <div className="flex flex-row ">
              <div>
                <div className="text-l uppercase text-white mt-5">Rating</div>
                <div className="">
                  <div>
                    <i className="fa-solid fa-star text-red-500"></i>
                    <label className="ml-2">7.4</label>
                  </div>
                  <div className="text-xs text-gray-500">555167 votes</div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-center">
            <div>
              <figure>
                <img
                  className="h-96 w-56"
                  src="https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6762_AL_.jpg"
                ></img>
              </figure>
            </div>
            <div>
              <iframe
                src="https://www.imdb.com/video/imdb/vi2333017881/imdb/embed"
                width="640"
                height="386"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                frameborder="no"
                scrolling="no"
              ></iframe>
            </div>
          </section>

          <section className="mt-5">
            <div className="flex justify-between">
              <div>
                <button className="btn btn-outline btn-primary rounded-full mr-2">
                  Adventure
                </button>
                <button className="btn btn-outline btn-primary rounded-full mr-2">
                  Drama
                </button>
                <button className="btn btn-outline btn-primary rounded-full mr-2">
                  Fantasy
                </button>
              </div>
              <div>
                <button className="btn btn-secondary basis-2/6">
                  <i className="fa-solid fa-bookmark"></i>
                  <label className="ml-3">Add to watchlist</label>
                </button>
              </div>
            </div>
            <div className="mt-5 mb-5">
              <label>
                The survivors of a plane crash are forced to work together in
                order to survive on a seemingly deserted tropical island.
              </label>
            </div>
            <hr className="color-red-500"></hr>
            <div className="mt-5 mb-5">
              <label className="color-white text-xl">Creators </label>
              <label className="ml-5">
                J.J. Abrams, Jeffrey Lieber, Damon Lindelof
              </label>
            </div>
            <hr className="color-red-500"></hr>
          </section>
          <section>
            <div className="mt-5 mb-5">
              <label className="color-white text-xl">Cast</label>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TitlePage;
