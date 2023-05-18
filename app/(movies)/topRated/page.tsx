import Movie from "../../components/movie";
import Title from "../../components/title";

async function getData() {
  const res = await import("../../api/top-rated/route");
  console.log(await res.GET());

  return await (await res.GET()).json();
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
      <Title title=" Latest Movies" />
      <div className="grid lg:grid-cols-fluid gap-14 mb-14  mx-5 lg:mx-0">
        {data.data.results.map((item: Movie) => (
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
