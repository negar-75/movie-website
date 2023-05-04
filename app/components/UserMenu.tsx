"client side";
type UserMenuProps = {
  isMenuOpen: boolean;
};

function UserMenu({ isMenuOpen }: UserMenuProps) {
  console.log(isMenuOpen);
  return (
    <div
      className={`${
        isMenuOpen === true ? "block" : "hidden"
      } z-10 absolute bg-black rounded-lg shadow w-44 top-[59px] right-[0px] text-white`}
    >
      <ul
        className="py-2 text-sm text-white"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:font-semibold hover:text-red-700"
          >
            profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:font-semibold hover:text-red-700"
          >
            Active Service
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2  hover:font-semibold hover:text-red-700"
          >
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
