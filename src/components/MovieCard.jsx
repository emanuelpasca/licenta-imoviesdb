const MovieCard = () => {
  return (
    <div className="p-2">
      <div className="card card-normal w-36 h-72 bg-secondary shadow-xl rounded-none">
        <figure>
          <img
            className="h-25 w-36"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbuzz.tt%2Fmedia%2Fposters%2F1981%2Fposters_4_1500.jpg&f=1&nofb=1&ipt=e7e0d0ddafbf703d65aa7f20b866e489938e28d8ae0f13edb99c29ceebdd3f5f&ipo=images"
            alt="Shoes"
          />
        </figure>
        <div className="p-1">
          <div className="flex justify-between">
            <div className="space-x-1">
              <i class="fa-solid fa-star"></i>
              <label>7.4</label>
            </div>
            <div className="flex space-x-2">
              <div className="flex-initial cursor-pointer">
                <i class="fa-regular fa-bookmark"></i>
              </div>
              <div className="flex-initial cursor-pointer">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
          <div>
            <strong>Rampage</strong>
          </div>
          <div className="flex justify-between">
            <div className="space-x-2 cursor-pointer">
              <i class="fa-solid fa-play"></i>
              <label className="text-xs cursor-pointer">Play trailer</label>
            </div>
            <div className="cursor-pointer">
              <i class="fa-solid fa-circle-info"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
