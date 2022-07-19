import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/product/productAction";
import Loading from "../loading/Loading";
import Product from "./Product";

const Sofa = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: any) => state.productsList);
  const { loading, error, products } = productsList;
  React.useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  const sofa = products.filter((product: Product) => {
    if (product.category === "sofa") {
      return product;
    }
  });
  return (
    <>
      <h1 className="products-container-heading">Sofa</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="products-container">
            {sofa.map((item: Product) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Sofa;
