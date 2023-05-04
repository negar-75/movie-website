import Header from "./components/Header";
import Movie from "./components/Movie";

//https://api.themoviedb.org/3/movie/550?api_key=9f4e84c8fccb058b760ce9cbcf7b1cb8
async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
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
async function Home() {
  const data = await getData();

  return (
    <div className="lg:mx-5">
      <Header />
      <div className="title text-white font-semibold mb-8 relative flex items-center  ">
        <span className="flex-shrink text-2xl text-white px-4 ">
          Popular To Watch
        </span>
        <div className="flex-grow h-px bg-light"></div>
      </div>

      <div className="grid grid-cols-fluid gap-16 mb-14">
        {data.results.map((item: Movie) => (
          <Movie
            key={item.id}
            image={item.poster_path}
            title={item.title}
            id={item.id}
            averageVote={item.vote_average}
            category={"popular"}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
