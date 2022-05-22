import { useContext } from "react";
import { MainContext } from "../context";

function Cart(props) {
  const { favorite, handleFavoriteShow = Function.prototype } =
    useContext(MainContext);

  const quantity = favorite.length;
  console.log(favorite);

  return (
    <div className="cart deep-purple lighten-1 white-text" onClick={handleFavoriteShow}>
      <i className="material-icons">favorite</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };