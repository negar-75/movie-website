import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type NavbarOptionProps = {
  name: string;
  menu?: React.ReactNode;
};

function NavbarOption({ name, menu }: NavbarOptionProps) {
  return (
    <div className="group hover:bg-slate-700/60 relative flex z-20 ">
      <div className="flex items-center justify-center gap-3 w-full h-full px-4 ">
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ fontSize: 12, color: "#807979", cursor: "pointer" }}
        />
        <span className="  cursor-pointer">{name}</span>
      </div>
      <div className="hidden group-hover:block">{menu}</div>
    </div>
  );
}

export default NavbarOption;
