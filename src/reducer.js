export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_FILMS":
      return {
        ...state,
        movies: payload || [],
        loading: false,
      };
    case "ADD_TO_FAVORITE": {
      const itemIndex = state.favorite.findIndex(
        (favoriteItem) => favoriteItem.imdbID === payload.imdbID
      );

      let newFavorite = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newFavorite = [...state.favorite, newItem];
      } else {
        newFavorite = state.favorite.map((favoriteItem, index) => {
          if (index === itemIndex) {
            return {
              ...favoriteItem,
              quantity: favoriteItem.quantity + 1,
            };
          } else {
            return favoriteItem;
          }
        });
      }

      return {
        ...state,
        favorite: newFavorite,
        alertName: payload.Title,
      };
    }
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((el) => el.imdbID !== payload.imdbID),
      };   
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "TOGGLE_BASKET":
      return {
        ...state,
        isFavoriteShow: !state.isFavoriteShow,
      };
    default:
      return state;
  }
}
