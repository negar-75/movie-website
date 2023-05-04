import Movie from "../components/Movie";

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

async function TopRated() {
  const data = await getData();

  return (
    <div className="lg:mx-5">
      <div className="title text-white font-semibold mb-8 relative flex items-center  ">
        <span className="flex-shrink text-2xl text-white px-4 ">
          Latest Movies
        </span>
      </div>

      <div className="grid grid-cols-fluid gap-16 mb-14">
        {data.results.map((item: Movie) => (
          <Movie
            category={"topRated"}
            key={item.id}
            image={item.poster_path}
            title={item.title}
            id={item.id}
            averageVote={item.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default TopRated;
