import  Card  from "../components/Card";
import  useFetch  from "../hooks/useFetch";
import  useTitle  from "../hooks/useTitle";


const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex lg:justify-start flex-wrap justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList
