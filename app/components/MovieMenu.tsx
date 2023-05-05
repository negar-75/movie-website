import Link from "next/link";

function MovieMenu() {
  return (
    <div
      className="bg-black absolute top-20 left-0 z-100 h-[330px] w-[325px] hidden group-hover:grid px-4 py-3 rounded-2xl
     grid-cols-2 grid-rows-2 gap-y-[40px] gap-x-[10px]"
    >
      <div className="text-white ">
        <h5 className="mb-3 border-b-2 py-1">Movies </h5>
        <ul className="text-[13px] flex flex-col gap-2 mr-4">
          <li className="cursor-pointer hover:font-semibold hover:text-red-700 ">
            All movies
          </li>
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            The most watched movies
          </li>
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            The Latest
          </li>
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            Coming Soon
          </li>
        </ul>
      </div>
      <div className="text-white">
        <h5 className="mb-3 border-b-2 py-1">Specials </h5>
        <ul className="text-[13px] flex flex-col gap-2">
          <Link href={"/topRated"}>
            <li className="cursor-pointer hover:font-semibold hover:text-red-700">
              Top Rated Movies
            </li>
          </Link>

          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            Top Popular Movies
          </li>
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            Oscars
          </li>
        </ul>
      </div>
      <div className="text-white">
        <h5 className="mb-3 border-b-2 py-1">Rewards </h5>
        <ul className="text-[13px] flex flex-col gap-2">
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            Golden Globe
          </li>
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            Befta
          </li>
          <li className="cursor-pointer hover:font-semibold hover:text-red-700">
            Oscars
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieMenu;
