"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";

type MobileSideBarMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
};

function MobileSideBarMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileSideBarMenuProps) {
  return (
    <div
      className={`${
        isMenuOpen ? "grid" : "hidden"
      }  grid-rows-12  gap-y-10 fixed top-0 right-0 left-0 bottom-0 h-[100vh] bg-neutral-300 transition-all duration-75 min-[652px]:hidden pb-10 overflow-y-scroll overflow-x-hidden`}
    >
      <div className="py-[10px] justify-center row-[1/3] flex items-center ">
        <div
          onClick={() => setIsMenuOpen(false)}
          className=" border-black border-4 h-[40px] w-[40px]  rounded-full flex items-center justify-center p-6 cursor-pointer hover:border-red-800"
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl text-red-800 "
          />
        </div>
      </div>

      <div className=" row-[3/10]">
        <ul className="text-center text-3xl space-y-5">
          <li className="cursor-pointer  py-2 hover:translate-x-3 transition-transform ease-in duration-200">
            Movies
          </li>
          <li className="cursor-pointer  py-2 hover:translate-x-3 transition-transform ease-in duration-200">
            Serials
          </li>
          <li className="cursor-pointer  py-2 hover:translate-x-3 transition-transform ease-in duration-200">
            Artist
          </li>
          <li className="cursor-pointer  py-2 hover:translate-x-3 transition-transform ease-in duration-200">
            Shopping
          </li>
          <li className="cursor-pointer  py-2 hover:translate-x-3 transition-transform ease-in duration-200">
            Drinks
          </li>
          <li className="cursor-pointer  py-2 hover:translate-x-3 transition-transform ease-in duration-200">
            Profile
          </li>
        </ul>
      </div>
      <div className="row-[10/13]">
        <Logo
          fontSize="text-xl"
          height="h-30"
        />
      </div>
    </div>
  );
}

export default MobileSideBarMenu;
