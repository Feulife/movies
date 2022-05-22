import { useContext } from "react";
import { MainContext } from "../context";

function FavoriteItem(props) {
  const { imdbID, Title, Year, Type } = props;

  const { removeFromFavorite } =
    useContext(MainContext);

  return (
    <li className="collection-item">
      <span style={{ fontWeight: "600" }}>{Title}</span>
      {". "}
      {Year}
      {", "}
      <span style={{ fontStyle: "italic" }}>{Type}</span>
      <span className="secondary-content" onClick={() => removeFromFavorite(imdbID)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { FavoriteItem };
