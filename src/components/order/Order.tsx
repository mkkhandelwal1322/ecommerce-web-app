import "./Order.css";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import styled from "styled-components";
import { Description, Heading } from "../../styles/Style";

const OrderDescription = styled(Description)`
  margin-bottom: 0;
`;

const OrderContent = styled.div`
  margin-left: 35px;
`;

const Order = () => {
  const order = useSelector((state: any) => state.order);
  const { loading, orders } = order;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="order-section">
            <Heading>Your Orders</Heading>
            <OrderContent>
              {orders.map((order: any) => (
                <>
                  <div className="order-info-container">
                    <h2 className="order-info-ordered-by">
                      Ordered By : {order.orderInfo.name}
                    </h2>
                    <OrderDescription>
                      Address :{" "}
                      {order.orderInfo.shippingAddress +
                        " , " +
                        order.orderInfo.city +
                        " , " +
                        order.orderInfo.state +
                        " - " +
                        order.orderInfo.pinCode}
                    </OrderDescription>
                    <OrderDescription>
                      Placed on : {order.createdAt}
                    </OrderDescription>
                  </div>
                  <div className="order-details">
                    {order.orderItems.map((order: any) => (
                      <>
                        <img
                          className="order-item-image"
                          src={order.image}
                          alt=""
                        />
                        <h3 className="order-item-title">{order.name}</h3>
                        <h5 className="order-item-price">₹ {order.price}</h5>
                      </>
                    ))}
                  </div>
                </>
              ))}
            </OrderContent>
          </div>
        </>
      )}
    </>
  );
};

export default Order;
