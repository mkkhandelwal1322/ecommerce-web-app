import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/product/productAction";
import Loading from "../loading/Loading";

const Chair = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: any) => state.productsList);
  const { loading, error, products } = productsList;
  React.useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  const chair = products.filter((product: Product) => {
    if (product.category === "chair") {
      return product;
    }
  });
  return (
    <>
      <h1 className="products-container-heading">Chairs</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="products-container">
            {chair.map((item: Product) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Chair;
