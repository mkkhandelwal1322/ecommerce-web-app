import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteFromCart } from "../../redux/cart/cartAction";
import { addToWishlist } from "../../redux/wishlist/wishlistAction";
import { Heading, Description, Button } from "../../styles/Style";

type Props = {
  cartItem: Product;
};

const CartItemHeading = styled(Heading)`
  margin-left: 0;
  margin-top: 35px;
`;
const CartButton = styled(Button)`
  font-size: 16px;
  padding: 12px 27px;
`;

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(deleteFromCart(cartItem));
  };
  const moveToWishlist = () => {
    dispatch(addToWishlist(cartItem));
    dispatch(deleteFromCart(cartItem));
  };
  return (
    <>
      <div className="cart-item-section">
        <img className="cart-img" src={cartItem.image} />
        <div className="cart-about">
          <CartItemHeading className="cart-title">
            {cartItem.name}
          </CartItemHeading>
          <Description className="cart-description">
            {cartItem.description}
          </Description>
        </div>
        <div className="cart-prices">
          <div className="cart-amount">₹ {cartItem.price}</div>
          <div className="button-box">
            <CartButton onClick={moveToWishlist}>Move to Wishlist</CartButton>
            <CartButton onClick={removeFromCart}>Remove from Bag</CartButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
