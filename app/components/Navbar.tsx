"client side";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MovieMenu from "./MovieMenu";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-20 flex items-center px-10  ">
      <SearchBar />
      <div className="text-light mr-auto flex gap-20 h-full ">
        <div className="group hover:bg-slate-700/60 relative ">
          <div className="flex items-center justify-center gap-3 w-full h-full px-4 ">
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
            />
            <span className=" cursor-pointer group">Movie</span>
          </div>
          <MovieMenu />
        </div>
        <div className="flex items-center justify-center gap-3">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
          />
          <span className="cursor-pointer">Serial</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
          />
          <span className="cursor-pointer">Artist</span>
        </div>
      </div>
      <div
        className="avatar flex items-center cursor-pointer relative"
        onClick={() => setIsMenuOpen((pre) => !pre)}
      >
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-3"
          src="/avatar.png"
          alt="Bordered avatar"
        />
        <span className="text-light">John Doe</span>
        <UserMenu isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}

export default Navbar;
