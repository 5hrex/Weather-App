import { useEffect, useState } from "react";

function MovieApp() {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const moviefetch = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?s=guardians&apikey=2bb7ef50"
        );
        const data = await response.json();
        setmovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    moviefetch();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {Array.isArray(movies) &&
            movies.map((movie) => {
              <li key={movie.id}>{movie.title}</li>;
            })}
        </ul>
      )}
    </div>
  );
}
export default MovieApp;
