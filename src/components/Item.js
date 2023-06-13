import React from "react";

function Item({ name, category }) {
  const [ isInCart, setIsInCart ] = React.useState(false)
  const cartClass = isInCart ? "in-cart" : ""
  function addToCartClick () {
    setIsInCart(!isInCart)
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartClick}>{isInCart ? "Remove from Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
