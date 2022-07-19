import {
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_FAIL,
  EMPTY_CART,
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAIL,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAIL,
} from "./cartTypes";
const initialState: CartState = {
  loading: false,
  cartItems: [],
  error: "",
  cartTotal: 0,
};
export const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload],
      };
    case ADD_CART_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_CART_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_CART_ITEMS_REQUEST:
      return {
        ...state,
        cartItems: [],
        loading: true,
      };
    case FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case FETCH_CART_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        loading: false,
        cartItems: [],
      };
    default:
      return state;
  }
};
