import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/product/productAction";
import Loading from "../loading/Loading";
import Product from "./Product";

const AllProducts = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: any) => state.productsList);
  const { loading, error, products } = productsList;
  return (
    <>
      <h1 className="products-container-heading">All Products</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="products-container">
            {products.map((product: Product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>{" "}
        </>
      )}
    </>
  );
};

export default AllProducts;
