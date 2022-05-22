import { useEffect, useContext } from "react";
import { MainContext } from "../context";
import { Controls } from "../components/Controls";
import { Preloader } from "./Preloader";
import { Movies } from "./Movies";
import { Cart } from "./Cart";
import { FavoriteList } from "./FavoriteList";
import { Alert } from "./Alert";

function Main() {
  const { loading, favorite, isFavoriteShow, alertName, setMovies } =
    useContext(MainContext);

  const searchMovies = (str, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?apikey=78584b3c&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=courage`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={favorite.length} />
      <Controls onSearch={searchMovies} />
      {loading ? <Preloader /> : <Movies />}
      {isFavoriteShow && <FavoriteList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Main };