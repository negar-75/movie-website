"client side";
import { useRef, useEffect, useState } from "react";

function UserMenu() {
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="avatar flex items-center relative h-full px-5"
      ref={userMenuRef}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsMenuOpen((pre) => !pre)}
      >
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-3"
          src="/avatar.png"
          alt="Bordered avatar"
        />
        <span className="text-light">John Doe</span>
      </div>

      <div
        className={`${
          isMenuOpen === true ? "block" : "hidden"
        } z-10 absolute bg-black rounded-lg shadow w-44 top-[100%] right-[0px] text-white`}
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
    </div>
  );
}

export default UserMenu;
