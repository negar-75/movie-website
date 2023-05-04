"client side";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function SearchBar() {
  const [data, setData] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const imagePath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function getData() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`;
      const res = await fetch(url);
      const movies = await res.json();
      setData(movies.results);
    }
    getData();
  }, [query]);

  return (
    <>
      <div className="border-[1px] rounded-full border-light px-4 mr-auto relative ">
        <input
          type="text"
          placeholder="Search..."
          className="py-2  bg-transparent outline-none text-light "
          onChange={(e) => setQuery(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          style={{ fontSize: 20, color: "#807979", cursor: "pointer" }}
        />
      </div>
      <ul className="list absolute top-[4rem] z-50 text-white bg-black px-4 w-[360px] ">
        {data &&
          data.map((movie) => (
            <li className=" mt-4 border-b-2 hover:text-red-800 cursor-pointer">
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
    </>
  );
}
export default SearchBar;
