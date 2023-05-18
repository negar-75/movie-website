"use client";
import SearchBar from "@/app/components/SearchBar";
import UserMenu from "@/app/components/UserMenu";
import NavbarOptions from "@/app/components/NavbarOptions";
import Logo from "@/app/components/Logo";
import MobileSidebar from "@/app/components/MobileSidebar";
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
