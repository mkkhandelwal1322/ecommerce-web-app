import React from "react";
import "./Product.css";
import Products from "./Products";
import { Heading } from "../../styles/Style";

const Shop = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [category, setCategory] = React.useState("products");
  return (
    <>
      <div className="shop-header">
        <Heading className="shop-heading">Shop</Heading>
        <select
          id="standard-select"
          className="shop-category-select"
          value={category}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setCategory(event.target.value)
          }
        >
          <option value="products">All Products</option>
          <option value="chair">Chairs</option>
          <option value="sofa">Sofa</option>
          <option value="table">Tables</option>
        </select>
        <div className="shop-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
          />
          <i className="fa fa-magnifying-glass shop-search-btn"></i>
        </div>
      </div>
      <Products searchTerm={searchTerm} category={category} />
    </>
  );
};

export default Shop;
