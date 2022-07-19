import styled from "styled-components";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import { Button, Heading } from "../../styles/Style";

const SubtotalHeading = styled(Heading)`
  margin-left: 0;
  margin-bottom: 15px;
`;
const CheckoutButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  display: inline-block;
  padding: 12px 55px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-top: 10px;
`;

const Cart = () => {
  toast.configure();
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);
  const { loading, cartItems } = cart;
  const cartTotal = (cartItems: Product[]) => {
    let total = 0;
    cartItems.forEach((item: Product) => {
      total += item.price;
    });
    return total;
  };
  const cartAmount = cartTotal(cartItems);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Heading>Your Bag</Heading>
          {cartItems &&
            cartItems.map((item: Product) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          {cartItems.length > 0 && (
            <>
              <hr />
              <div className="cart-checkout-section">
                <div className="cart-total">
                  <div>
                    <SubtotalHeading>Sub-Total</SubtotalHeading>
                    <p className="items">{cartItems.length} item (s)</p>
                  </div>
                  <Heading>₹ {cartAmount}</Heading>
                </div>
                <CheckoutButton onClick={() => navigate("/checkout")}>
                  Checkout
                </CheckoutButton>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
