"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import { ChangeEvent } from "react";
import _ from "lodash";

function SearchBar() {
  const [data, setData] = useState<any[]>([]);
  const [searchSectionIsOpen, setSearchSectionIsOpen] =
    useState<boolean>(false);

  const imagePath = "https://image.tmdb.org/t/p/original";

  const debouncedFunc = useMemo(
    () => _.debounce((userInput) => getData(userInput), 1000),
    []
  );

  async function getData(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`;
    const res = await fetch(url);
    const movies = await res.json();
    setData(movies.results);
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    debouncedFunc(userInput);
  };

  return (
    <div className="max-[640px]:w-[15%] max-[640px]:text-center md:mr-auto">
      <div
        className="min-[640px]:hidden block cursor-pointer relative  text-red-800 text-xl"
        onClick={() => setSearchSectionIsOpen((pre) => !pre)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div
        className={`max-[640px]:bg-stone-200 max-[640px]:absolute flex items-center max-[640px]:w-full justify-center top-[100%] h-0 md:h-11 max-[640px]:overflow-hidden transition-all duration-300 ${
          searchSectionIsOpen && "h-[55px]"
        }`}
      >
        <div className="border-[1px] rounded-full border-light px-2 md:px-4 flex items-center max-[640px]:w-[90%]   ">
          <input
            type="text"
            placeholder="Search..."
            className="py-2  bg-transparent outline-none text-light max-[640px]:w-[90%] lg:w-[300px]"
            onChange={handleInput}
          />
        </div>
      </div>

      {data.length > 0 && (
        <ul className=" absolute top-[115px] lg:top-[80px]  z-50 text-white bg-black px-4 lg:w-[360px] h-[100vh] overflow-scroll w-[350px] ">
          {data.map((movie, index) => (
            <li
              className=" mt-4 border-b-2 hover:text-red-800 cursor-pointer"
              key={index}
            >
              <div className="flex items-center gap-3 py-3">
                <img
                  src={imagePath + movie.poster_path}
                  className="w-[50px] h-[80px] object-cover"
                />
                {movie.original_title}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SearchBar;
