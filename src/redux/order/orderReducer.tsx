import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "./orderTypes";

const initialState = {
  laoding: false,
  orders: [],
  error: "",
};

export const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PLACE_ORDER_REQUEST:
      return { ...state, loading: true, orders: [] };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.orderData,
        orderInfo: action.payload.orderInfo,
      };
    case PLACE_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
