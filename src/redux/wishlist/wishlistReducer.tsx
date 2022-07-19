import {
  ADD_WISHLIST_ITEM_REQUEST,
  ADD_WISHLIST_ITEM_SUCCESS,
  ADD_WISHLIST_ITEM_FAIL,
  FETCH_WISHLIST_ITEMS_REQUEST,
  FETCH_WISHLIST_ITEMS_SUCCESS,
  FETCH_WISHLIST_ITEMS_FAIL,
} from "./wishlistTypes";

const initialState: WishlistState = {
  loading: false,
  wishlistItems: [],
  error: "",
};

export const wishlistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_WISHLIST_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_WISHLIST_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case ADD_WISHLIST_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_WISHLIST_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WISHLIST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlistItems: action.payload,
      };
    case FETCH_WISHLIST_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
