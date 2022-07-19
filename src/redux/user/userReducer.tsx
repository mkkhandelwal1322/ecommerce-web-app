import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_FAIL,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SET_USER,
  ADD_CART_ITEM_LS,
} from "./userTypes";

export const userReducer = (
  state: AuthState = { loading: false, currentUser: null, error: null },
  action: any
) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };
    case SIGN_UP_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };
    case SIGN_IN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SIGN_OUT_REQUEST:
      return { ...state, loading: true };
    case SIGN_OUT_SUCCESS:
      return { ...state, loading: false, currentUser: null };
    case SIGN_OUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SET_USER:
      return { ...state, loading: false, currentUser: action.payload };
    case ADD_CART_ITEM_LS:
      return { ...state };
    default:
      return state;
  }
};
