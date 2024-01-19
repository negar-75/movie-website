"use client";
import SearchBar from "@/app/components/searchBar";
import UserMenu from "@/app/components/userMenu";
import NavbarOptions from "@/app/components/navbarOptions";
import Logo from "@/app/components/logo";
import MobileSidebar from "@/app/components/mobileSidebar";
import Signup from "./signup";
function Navbar() {
  return (
    <div className="min-[652px]:h-20 flex items-center min-[652px]:px-10  h-[60px] relative  max-[652px]:w-[100%]  top-0 left-0 z-10   ">
      <SearchBar />
      <div className="min-[652px]:hidden  w-[70%]">
        <Logo
          fontSize="text-base"
          height="h-[60px]"
        />
      </div>
      <NavbarOptions />
      <MobileSidebar />
      <Signup/>
      {/* <UserMenu /> */}
    </div>
  );
}

export default Navbar;
