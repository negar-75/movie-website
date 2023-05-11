import VoteCard from "../../components/VoteCard";
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
  const response1 = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );
  const response2 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );

  if (!response1.ok || !response2.ok) {
    throw new Error("Failed to fetch data");
  }
  const result1 = await response1.json();
  const result2 = await response2.json();

  return {
    response1: result1,
    response2: result2,
  };
}

export async function generateStaticParams() {
  const movies = await getData();

  let arrayOfIds: string[] = [];
  for (const value of Object.values(movies)) {
    value.results.map((item: any) => arrayOfIds.push(item.id));
  }
  console.log(arrayOfIds);
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
