"use client";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import NavbarOptions from "./NavbarOptions";
import Logo from "./Logo";
import MobileSidebar from "./MobileSidebar";
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
