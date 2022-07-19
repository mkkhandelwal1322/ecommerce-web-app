import React from "react";
import "./Product.css";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1 className="products-container-heading">Shop</h1>
      <div className="category-container">
        <Link className="category-box" to="products" title="All Products">
          <div className="category-img-box">
            <img
              src="https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="detail-box">
            <h4 className="category-heading-box">All Products</h4>
          </div>
        </Link>
        <Link className="category-box" to="chairs" title="Chairs">
          <div className="category-img-box">
            <img
              src="https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="detail-box">
            <h4 className="category-heading-box">Chairs</h4>
          </div>
        </Link>
        <Link className="category-box" to="sofa" title="Sofa">
          <div className="category-img-box">
            <img
              src="https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="detail-box">
            <h4 className="category-heading-box">Sofa</h4>
          </div>
        </Link>
        <Link className="category-box" to="tables" title="Tables">
          <div className="category-img-box">
            <img
              src="https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="detail-box">
            <h4 className="category-heading-box">Tables</h4>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Products;
