import { combineReducers } from "redux";
import { productListReducer } from "../product/productReducer";
import { cartReducer } from "../cart/cartReducer";
import { userReducer } from "../user/userReducer";
import { wishlistReducer } from "../wishlist/wishlistReducer";
import { orderReducer } from "../order/orderReducer";

const rootReducer = combineReducers({
  productsList: productListReducer,
  cart: cartReducer,
  user: userReducer,
  wishlist: wishlistReducer,
  order: orderReducer,
});

export default rootReducer;
