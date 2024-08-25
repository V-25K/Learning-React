import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [searchText, setSearchText] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div className="main-container">
      <SearchBar
        searchText={searchText}
        inStock={inStock}
        onSearchTextChange={setSearchText}
        onInStockChange={setInStock}
      />
      <ProductTable
        products={PRODUCTS}
        searchText={searchText}
        inStock={inStock}
      />
    </div>
  );
}

export default FilterableProductTable;
