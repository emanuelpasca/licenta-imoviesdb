const Navbar = () => {
  return (
    <div className="navbar bg-secondary">
      <div className="flex-1">
        <a className="btn btn-primary normal-case text-lg">iMOVIES</a>
      </div>
      <div className="flex-none gap-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-xs bg-accent"
          />
        </div>
        <div>
          <i class="fa-solid fa-heart"></i>
          <button className="btn btn-secondary rounded-full">Favorites</button>
        </div>
        <div>
          <i class="fa-solid fa-user"></i>
          <button className="btn btn-secondary rounded-full">Actors</button>
        </div>
        <div>
          <i class="fa-solid fa-bookmark"></i>
          <button className="btn btn-secondary rounded-full">Watchlist</button>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_124200.png&f=1&nofb=1&ipt=9039a08cab91286a0b12274e5af153cbbe3b307d64d685c019641b6a2bf43ef9&ipo=images" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
