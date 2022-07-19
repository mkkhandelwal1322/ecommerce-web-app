import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../redux/cart/cartAction";
import { addToWishlist } from "../../redux/wishlist/wishlistAction";
import { Button, Heading, Description } from "../../styles/Style";
import Loading from "../loading/Loading";
import "./Product.css";

const ProductHeading = styled(Heading)`
  margin-left: 0;
`;
const ProductButton = styled(Button)`
  margin-left: 0;
  margin-right: 35px;
`;

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const productsList = useSelector((state: any) => state.productsList);
  const user = useSelector((state: any) => state.user);
  const { loading, products } = productsList;
  const productToDisplay = products.find((product: Product) => {
    return product.id == id;
  });
  const addToCartFromProductPage = (product: Product) => {
    dispatch(addToCart(product));
  };
  const addToWishlistFromProductPage = (product: Product) => {
    if (user.currentUser) {
      dispatch(addToWishlist(product));
    } else {
      navigate("/signin", { replace: true });
      dispatch(addToWishlist(product));
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="product-display-section">
            <div className="product-display-img">
              <img src={productToDisplay.image} alt="" />
            </div>
            <div className="product-display-content">
              <ProductHeading>{productToDisplay.name}</ProductHeading>
              <Description>{productToDisplay.description}</Description>
              <h3 className="product-display-price">₹ 5000</h3>
              <div className="product-display-buttons">
                <ProductButton
                  onClick={() => addToCartFromProductPage(productToDisplay)}
                >
                  Add to Cart
                </ProductButton>
                <ProductButton
                  onClick={() => addToWishlistFromProductPage(productToDisplay)}
                >
                  Add to Wishlist
                </ProductButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDisplay;
