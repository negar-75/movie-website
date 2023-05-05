"client side";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MovieMenu from "./MovieMenu";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
function Navbar() {
  return (
    <div className="lg:h-20 flex items-center lg:px-10  h-[60px] relative  max-[640px]:w-[100%] max-[640px]:absolute top-0 left-0 z-10   ">
      <SearchBar />
      <div className="text-light mr-auto flex gap-20 h-full ">
        <div className="group hover:bg-slate-700/60 relative hidden lg:block z-20 ">
          <div className="flex items-center justify-center gap-3 w-full h-full px-4 ">
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
            />
            <span className=" cursor-pointer group">Movie</span>
          </div>
          <MovieMenu />
        </div>
        <div className="lg:flex items-center justify-center gap-3 hidden ">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
          />
          <span className="cursor-pointer">Serial</span>
        </div>
        <div className="lg:flex items-center justify-center gap-3 hidden ">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
          />
          <span className="cursor-pointer">Artist</span>
        </div>
      </div>
      <UserMenu />
    </div>
  );
}

export default Navbar;
