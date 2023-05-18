import MovieMenu from "@/app/components/MovieMenu";
import NavbarOption from "@/app/components/NavbarOption";
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
