import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = React.useState("All")
    if (selectedCategory === "Produce") {
      const newItems = items.filter(item => item.category === "Produce")
      return (
        renderShoppingList(newItems)
      );
    }
    if (selectedCategory === "Dairy") {
      const newItems = items.filter(item => item.category === "Dairy")
      return(
        renderShoppingList(newItems)
      );
    }
    if (selectedCategory === "Dessert") {
      const newItems = items.filter(item => item.category === "Dessert")
      return(
        renderShoppingList(newItems)
      );
    }
    else {
      return (renderShoppingList(items))
    }

  function renderShoppingList(newItems) {
    return(
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
    );
            }
          }

export default ShoppingList;
