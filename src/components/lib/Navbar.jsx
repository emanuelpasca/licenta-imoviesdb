import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./search-bar/SearchBar";
import { PagePaths } from "../../pages/pages";
import { useUserAuth } from "../../contexts/AuthContext";
import useToastify from "../../hooks/ToastHook";

const Navbar = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const notify = useToastify();

  const logOutHandler = async () => {
    try {
      await logOut();
      notify("success", "Logged out successfully");
      localStorage.setItem("userData", "");
      setTimeout(() => {
        navigate(PagePaths.LANDING);
      }, 2000);
      // window.location.reload();
    } catch (err) {
      notify("error", `${err}`);
    }
  };

  return (
    <div className="navbar bg-secondary sticky top-0 z-50">
      <div className="flex-1">
        <Link to={`/`}>
          <button className="btn btn-primary normal-case text-lg text-black font-mono">
            IMOVIESdb
          </button>
        </Link>
      </div>
      <div className="flex-none gap-5">
        <div className="form-control">
          <div className="flex flex-row">
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <i className="fa-sharp fa-solid fa-bars mr-3"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-secondary rounded-box w-60"
              >
                <Link to={"/top/Top250Movies"}>
                  <li>
                    <a>Top 250 Movies</a>
                  </li>
                </Link>
                <Link to={"/top/Top250TVs"}>
                  <li>
                    <a>Top 250 TVs</a>
                  </li>
                </Link>
                <Link to={"/top/MostPopularMovies"}>
                  <li>
                    <a>Most Popular Movies</a>
                  </li>
                </Link>
                <Link to={"/top/MostPopularTVs"}>
                  <li>
                    <a>Most Popular TVs</a>
                  </li>
                </Link>
                <Link to={"/top/InTheaters"}>
                  <li>
                    <a>In Theaters</a>
                  </li>
                </Link>
                <Link to={"/top/ComingSoon"}>
                  <li>
                    <a>Coming Soon</a>
                  </li>
                </Link>
              </ul>
            </div>
            <SearchBar></SearchBar>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-heart"></i>
          <Link to={PagePaths.FAVORITES}>
            <button className="btn btn-secondary rounded-full font-mono">
              Favorites
            </button>
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-user"></i>
          <button className="btn btn-secondary rounded-full font-mono">
            Actors
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_124200.png&f=1&nofb=1&ipt=9039a08cab91286a0b12274e5af153cbbe3b307d64d685c019641b6a2bf43ef9&ipo=images" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-secondary rounded-box w-52"
          >
            <li>
              {!user ? (
                <Link to={PagePaths.LOGIN}>
                  <label className="font-mono">Login</label>
                </Link>
              ) : (
                <label onClick={logOutHandler}>Logout</label>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
