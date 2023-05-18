"use client";
import SearchBar from "./searchBar";
import UserMenu from "./userMenu";
import NavbarOptions from "./navbarOptions";
import Logo from "./logo";
import MobileSidebar from "./mobileSidebar";
function Navbar() {
  return (
    <div className="md:h-20 flex items-center md:px-10  h-[60px] relative  max-[640px]:w-[100%]  top-0 left-0 z-10   ">
      <SearchBar />
      <div className="md:hidden  w-[70%]">
        <Logo
          fontSize="text-base"
          height="h-[60px]"
        />
      </div>
      <NavbarOptions />
      <MobileSidebar />
      <UserMenu />
    </div>
  );
}

export default Navbar;
