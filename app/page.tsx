import Header from "./components/Header";
import Movie from "./components/Movie";
import Title from "./components/Title";

async function getData() {
  const res = await import("./api/popular-movie/route");
  console.log(await (await res.GET()).json());

  return await (await res.GET()).json();
}
getData();
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
  console.log(data);
  return (
    <div className="lg:mx-5">
      <Header />

      <Title title="  Popular To Watch" />

      <div className="grid lg:grid-cols-fluid gap-14 mb-14  mx-5 lg:mx-0">
        {data.data.results.map((item: Movie) => (
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
