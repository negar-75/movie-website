import VoteCard from "@/app/components/VoteCard";
import Image from "next/image";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateStaticParams() {
  const movies = await getData();

  return movies?.results?.map((movie: Movie) => ({
    movie: movie.id.toString(),
  }));
}

async function MoviePage({ params }: any) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  return (
    <div className="text-white px-8 py-4 relative">
      <div className=" h-[500px] w-full relative mb-10">
        <Image
          className=" object-cover rounded-2xl "
          src={imagePath + data.backdrop_path}
          alt={data.title}
          fill
          priority
        />
      </div>
      <div className="">
        <h2 className="text-4xl">{data.title}</h2>
        <h1 className="text-lg ">{data.release_date}</h1>
        <h4>Runtime: {data.runtime} minutes</h4>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
          {data.status}
        </h2>
      </div>
      <div className="my-4">
        <p className="text-lg">{data.overview}</p>
      </div>
      <VoteCard
        rate={data?.vote_average?.toFixed(1)}
        voteCount={data.vote_count}
      />
    </div>
  );
}

export default MoviePage;
