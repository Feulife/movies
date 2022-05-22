import { useContext } from "react";
import { MainContext } from "../context";

function Movie(props) {
  const { imdbID, Title, Type, Year, Poster } = props;

  const { addToFavorite } = useContext(MainContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={Poster} alt={Title} />
      </div>
      <div className="card-content">
        <span className="card-title" style={ {fontWeight: "400"} }>{Title}</span>
        <span>{Type}</span>
        <span className="right" style={{ fontSize: "1rem" }}>
          {Year}
        </span>
      </div>
      <div className="card-action">
        <button
          className="btn deep-purple lighten-3 white-text"
          onClick={() =>
            addToFavorite({
              imdbID,
              Title,
              Year,
              Type
            })
          }
        >
          My favorite
        </button>        
      </div>
    </div>
  );
}

export { Movie };
