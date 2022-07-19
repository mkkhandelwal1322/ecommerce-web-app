import React from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Product from "./Product";

type Props = {
  searchTerm: string;
  category: string;
};

const Products: React.FC<Props> = ({ searchTerm, category }) => {
  const productsList = useSelector((state: any) => state.productsList);
  const { loading, products } = productsList;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="products-section">
            {products
              .filter((product: Product) => {
                if (searchTerm === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              })
              .filter((product: Product) => {
                if (category === "products") {
                  return product;
                } else if (product.category === category) {
                  return product;
                }
              })
              .map((product: Product) => {
                return <Product product={product} key={product.id} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
