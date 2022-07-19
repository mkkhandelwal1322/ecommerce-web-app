import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartAction";
import { addToWishlist } from "../../redux/wishlist/wishlistAction";

type Props = {
  product: Product;
};

const Product: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };
  const addToWishlistHandler = () => {
    dispatch(addToWishlist(product));
  };
  return (
    <>
      <div className="product-section">
        <div className="product-image">
          <img
            src={product.image}
            onClick={() => navigate(`/products/${product.id}`)}
          />
        </div>
        <div className="product">
          <h1 className="product-name">{product.name}</h1>
          <h2 className="product-price">₹ {product.price}</h2>
          <p className="product-description">{product.description}</p>
          <div className="buttons">
            <button className="add-btn" onClick={addToCartHandler}>
              Add to Cart
            </button>
            <button className="wishlist-btn" onClick={addToWishlistHandler}>
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
