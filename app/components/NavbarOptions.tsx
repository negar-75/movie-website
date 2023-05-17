import MovieMenu from "./MovieMenu";
import NavbarOption from "./NavbarOption";
function NavbarOptions() {
  return (
    <div className="text-light mr-auto hidden gap-16 h-full  md:flex">
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
