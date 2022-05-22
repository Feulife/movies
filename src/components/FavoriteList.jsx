import { useContext } from "react";
import { MainContext } from "../context";
import { FavoriteItem } from "./FavoriteItem";

function FavoriteList() {
  const { favorite = [], handleFavoriteShow = Function.prototype } =
    useContext(MainContext);
  
  return (
    <ul className="collection basket-list">
      <li className="collection-item active deep-purple lighten-1">Favorite</li>
      {favorite.length ? (
        favorite.map((item) => <FavoriteItem key={item.imdbID} {...item} />)
      ) : (
        <li className="collection-item">Favorite is empty</li>
      )}
      
      
      <i className="material-icons basket-close" onClick={handleFavoriteShow}>
        close
      </i>
    </ul>
  );
}

export { FavoriteList };
