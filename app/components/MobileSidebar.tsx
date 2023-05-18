"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import MobileSideBarMenu from "./mobileSideBarMenu";

function MobileSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="md:hidden w-[15%] text-center cursor-pointer"
        onClick={() => {
          console.log("hello");
          setIsMenuOpen(true);
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-red-800"
        />
      </div>
      <MobileSideBarMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}

export default MobileSidebar;
