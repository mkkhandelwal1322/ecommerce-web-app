import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/user/userAction";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import HomeImage from "./components/home/HomeImage";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./utils/firebase";
import Category from "./components/category/Category";
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./components/profile/Profile";
import { fetchCartItems } from "./redux/cart/cartAction";
import { fetchWishlistItems } from "./redux/wishlist/wishlistAction";
import ProductDisplay from "./components/products/ProductDisplay";
import { productList } from "./redux/product/productAction";
import CheckoutPage from "./components/checkout/CheckoutPage";
import Order from "./components/order/Order";
import { fetchOrders } from "./redux/order/orderAction";
import Shop from "./components/products/Shop";
import PageNotFound from "./components/not found/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  React.useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);
  React.useEffect(() => {
    dispatch(productList());
  }, []);
  React.useEffect(() => {
    if (user.currentUser) {
      dispatch(fetchWishlistItems());
    }
  }, [user]);
  React.useEffect(() => {
    if (user.currentUser) {
      dispatch(fetchCartItems());
    }
  }, [user]);
  React.useEffect(() => {
    if (user.currentUser) {
      dispatch(fetchOrders());
    }
  }, [user]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomeImage />
              <Category />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <>
              <ProtectedRoute path="/signin">
                <Navbar />
                <Wishlist />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <ProtectedRoute path="/signin">
                <Navbar />
                <Profile />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <ProtectedRoute path="/signin">
                <CheckoutPage />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <ProductDisplay />
              <Footer />
            </>
          }
        />
        <Route
          path="/myorders"
          element={
            <>
              <ProtectedRoute path="/signin">
                <Navbar />
                <Order />
                <Footer />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
