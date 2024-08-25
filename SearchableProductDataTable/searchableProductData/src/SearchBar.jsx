import React from "react";

function SearchBar({
  searchText,
  inStock,
  onSearchTextChange,
  onInStockChange,
}) {
  return (
    <form className="header">
      <input
        type="text"
        value={searchText}
        placeholder="Search..."
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <label>
        <input type="checkbox" onChange={(e) => onInStockChange(e.target.checked)}/> Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
