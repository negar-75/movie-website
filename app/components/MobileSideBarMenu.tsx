"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
        isMenuOpen ? "block" : "hidden"
      } fixed top-0 right-0 left-0 h-screen bg-red-500 transition-all duration-75`}
    >
      <FontAwesomeIcon
        icon={faClose}
        className="text-2xl"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

export default MobileSideBarMenu;
