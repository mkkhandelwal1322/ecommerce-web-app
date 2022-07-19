import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CheckoutPage.css";
import { placeOrder } from "../../redux/order/orderAction";
import { Button, Heading, Input } from "../../styles/Style";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialOrderFormValues = {
    name: "",
    phoneNumber: "",
    shippingAddress: "",
    pinCode: "",
    state: "",
    city: "",
  };
  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;
  const [orderFormValues, setOrderFormValues] = React.useState(
    initialOrderFormValues
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrderFormValues({ ...orderFormValues, [name]: value });
  };
  const submitOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(placeOrder(cartItems, orderFormValues));
    navigate("/", { replace: true });
    setOrderFormValues(initialOrderFormValues);
  };
  const cartTotal = (cartItems: Product[]) => {
    let total = 0;
    cartItems.forEach((item: Product) => {
      total += item.price;
    });
    return total;
  };
  const cartAmount = cartTotal(cartItems);
  return (
    <div className="checkout-section">
      <Heading>Checkout</Heading>
      <div className="checkout-form-body">
        <div>
          <form onSubmit={submitOrder}>
            <Input
              type="text"
              placeholder="Your Name"
              name="name"
              value={orderFormValues.name}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={orderFormValues.phoneNumber}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              name="shippingAddress"
              value={orderFormValues.shippingAddress}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="State"
              name="state"
              value={orderFormValues.state}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="City"
              name="city"
              value={orderFormValues.city}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="Pin Code"
              name="pinCode"
              value={orderFormValues.pinCode}
              onChange={handleChange}
              required
            />
            <Button type="submit">Place Order</Button>
          </form>
        </div>
        {cartItems.length > 0 && (
          <>
            <div className="checkout-order-summary">
              <h2 className="checkout-order-summary-heading">Order Summary</h2>
              <div className="order-summary-content">
                {cartItems.map((item: Product) => (
                  <div className="order-summary-div" key={item.id}>
                    <img
                      className="order-summary-img"
                      src={item.image}
                      alt=""
                    />
                    <h3 className="order-summary-title">{item.name}</h3>
                    <p className="order-summary-price">₹ {item.price}</p>
                  </div>
                ))}
              </div>
              <h3 className="order-summary-total">Total : ₹ {cartAmount}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
