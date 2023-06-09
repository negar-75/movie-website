"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import MobileSideBarMenu from "@/app/components/mobileSideBarMenu";

function MobileSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="min-[652px]:hidden w-[15%] text-center cursor-pointer"
        onClick={() => {
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
