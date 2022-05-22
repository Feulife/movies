import { useContext } from "react";
import { MainContext } from "../context";
import { Movie } from "./Movie";

function Movies() {
  const { movies = [] } = useContext(MainContext);

  if (!movies.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="movies">
      {movies.map((item) => (
        <Movie key={item.id} {...item} />
      ))}
    </div>
  );
}

export { Movies };
