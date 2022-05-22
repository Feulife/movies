import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const MainContext = createContext();

const initialState = {
  movies: [],
  loading: true,
  favorite: [],
  isFavoriteShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.addToFavorite = (item) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: item });
  };

  value.removeFromFavorite = (itemId) => {
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: { imdbID: itemId } });
  };

  value.handleFavoriteShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.setMovies = (data) => {
    dispatch({ type: "SET_FILMS", payload: data });
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
