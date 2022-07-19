import React from "react";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromWishlist,
  fetchWishlistItems,
} from "../../redux/wishlist/wishlistAction";
import Loading from "../loading/Loading";
import { addToCart } from "../../redux/cart/cartAction";
import { Button, Heading } from "../../styles/Style";
import styled from "styled-components";

const MoveToBagButton = styled(Button)`
  width: 100%;
  display: inline-block;
  padding: 12px 55px;
  margin-bottom: 10px;
  margin-left: 0;
`;

const Wishlist = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const wishlist = useSelector((state: any) => state.wishlist);
  const { loading, wishlistItems } = wishlist;
  React.useEffect(() => {
    if (user.currentUser) {
      dispatch(fetchWishlistItems());
    }
  }, [user]);
  const moveToBag = (event: any, wishlistItem: Product) => {
    event.preventDefault();
    dispatch(addToCart(wishlistItem));
    dispatch(deleteFromWishlist(wishlistItem));
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="wishlist-section">
            <Heading className="wishlist-heading">Your Wishlist</Heading>
            <div className="wishlist-items">
              {wishlistItems.map((wishlistItem: Product) => (
                <div className="wishlist-box">
                  <div className="img-box">
                    <img src={wishlistItem.image} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4 className="heading-box">{wishlistItem.name}</h4>
                    <h4 className="price-box">₹ {wishlistItem.price}</h4>
                  </div>
                  <MoveToBagButton
                    onClick={(event) => moveToBag(event, wishlistItem)}
                  >
                    Move to Bag
                  </MoveToBagButton>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Wishlist;
