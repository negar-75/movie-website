import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/${category}/${id}`}>
      <div className="bg-dark p-3 rounded-3xl relative h-[460px] hover:skew-y-3 duration-75">
        <Image
          src={imagePath + image}
          width={260}
          height={260}
          alt="movie poster"
          className="rounded-2xl mb-2 cursor-pointer"
        />
        <h4 className="text-white cursor-pointer">{title}</h4>
        <div className="absolute bottom-0 right-4 flex items-center border-2 border-amber-300 px-[5px] rounded-lg  text-white">
          <img
            className="w-5 h-5 mr-1 "
            src="/star.png"
            alt="Bordered avatar"
          />
          <span className="font-medium text-white">{averageVote}</span>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
