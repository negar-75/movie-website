import VoteCard from "@/app/components/voteCard";
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
  const topRated = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );
  const popular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );

  if (!topRated.ok || !popular.ok) {
    throw new Error("Failed to fetch data");
  }
  const result1 = await topRated.json();
  const result2 = await popular.json();

  return {
    topRatedMovies: result1,
    popularMovies: result2,
  };
}

export async function generateStaticParams() {
  const movies = await getData();
  
  let arrayOfIds: string[] = [];
  for (const value of Object.values(movies)) {
    value.results.map((item: any) => arrayOfIds.push(item.id));
  }

  return arrayOfIds?.map((movieId) => ({
    category: "topRated" || "popular",
    id: movieId.toString(),
  }));
}

async function MoviePage({ params }: any) {
  const { id } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data= await res.json();

  return (
    <div className="text-white lg:px-8  relative">
      <div className=" h-[500px] w-full relative mb-10">
        <Image
          className=" object-cover lg:rounded-2xl "
          src={imagePath + data.backdrop_path}
          alt={data.title}
          fill
          
        />
      </div>
      <div className="px-3 ">
        <h2 className="lg:text-4xl text-3xl">{data.title}</h2>
        <h1 className="text-lg ">{data.release_date}</h1>
        <h4>Runtime: {data.runtime} minutes</h4>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
          {data.status}
        </h2>
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
