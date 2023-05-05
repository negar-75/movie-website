import Link from "next/link";
import { sidebarMenu } from "../../data/sidebarMenu";
function Sidebar() {
  return (
    <div className="max-h-screen lg:flex flex-row basis-1/6 hidden ">
      <div className="flex flex-col overflow-hidden w-[100%] border-r-[1px] border-light">
        <div className="flex items-center justify-center h-20 ">
          <h1 className="text-3xl uppercase text-white ">
            <Link href={"/"}>
              <span className="text-red-800">CINEMA</span>CITY
            </Link>
          </h1>
        </div>
        <ul className="flex flex-col py-4">
          {sidebarMenu.map((item, index) => {
            if (item.title === "Notification") {
              return (
                <li key={index}>
                  <a
                    href="#"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-light"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-bell"></i>
                    </span>
                    <span className="text-sm font-medium">Notifications</span>
                    <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                      5
                    </span>
                  </a>
                </li>
              );
            } else
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex flex-row items-center h-12  hover:translate-x-3 transition-transform ease-in duration-200 text-gray-500 hover:text-light"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-home"></i>
                    </span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </a>
                </li>
              );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
