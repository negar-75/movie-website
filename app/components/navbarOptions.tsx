import MovieMenu from "@/app/components/movieMenu";
import NavbarOption from "@/app/components/navbarOption";
function NavbarOptions() {
  return (
    <div className="text-light mr-auto hidden gap-16 h-full  min-[652px]:flex">
      <NavbarOption
        name="Movie"
        menu={<MovieMenu />}
      />
      <NavbarOption name="Serial" />
      <NavbarOption name="Artist" />
    </div>
  );
}

export default NavbarOptions;
