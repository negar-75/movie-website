import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faShareNodes,
  faHeart,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

type MovieProps = {
  image: string;
  title: string;
  averageVote: number;
  id: number;
  category: string;
};

function Movie({ image, title, averageVote, id, category }: MovieProps) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <Link href={`movie/${category}/${id}`}>
      <div className="bg-[#1e1b26] relative h-[500px] duration-75 flex flex-col items-center rounded-md overflow-hidden">
        <div className="relative w-full h-[70%]">
          <div
            className="gradiant absolute top-0 left-0 right-0 bottom-0 z-[6]"
            style={{
              background: `linear-gradient(
        to bottom, 
        rgba(30,27,38,0) 0%, 
        rgba(30,27,38,0) 10%, 
        rgba(30,27,38,0) 85%, 
        rgba(30,27,38,1) 100%
    )`,
            }}
          ></div>
          <Image
            src={imagePath + image}
            alt="movie poster"
            fill
            className=" mb-2 cursor-pointer object-cover object-top "
          />
        </div>
        <div className=" relative h-[40%] w-full px-3 py-2 flex flex-col">
          <h4 className="text-stone-300 cursor-pointer">{title}</h4>
          <div className="flex items-center border-2 border-amber-300 px-[5px] rounded-lg  text-white w-[70px] mt-5">
            <img
              className="w-5 h-5 mr-1 "
              src="/star.png"
              alt="Bordered avatar"
            />
            <span className="font-medium text-stone-300">{averageVote}</span>
          </div>
          <div className="flex  justify-between mt-auto py-3 items-center text-stone-300">
            <div className="border-2 py-1 px-2  text-center rounded-lg border-stone-300 lg:text-sm">
              WATCH TRAILER
              <FontAwesomeIcon
                icon={faPlay}
                className="ml-4 lg:ml-2"
              />
            </div>
            <div className="flex gap-3 text-lg">
              <FontAwesomeIcon
                icon={faBookmark}
                className="hover:scale-110"
              />
              <FontAwesomeIcon
                icon={faShareNodes}
                className="hover:scale-110"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="hover:text-red-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
