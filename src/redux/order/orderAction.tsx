import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../utils/firebase";
import { fetchCartItems } from "../cart/cartAction";
import store from "../store";
import {
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "./orderTypes";

export const placeOrder =
  (cartItems: Product[], orderInfo: any) => async (dispatch: any) => {
    try {
      dispatch({ type: PLACE_ORDER_REQUEST });
      const { user } = store.getState();
      const orderRef = collection(db, "orders");
      const orderData: any = [];
      const order = await addDoc(orderRef, {
        orderItems: [...cartItems],
        orderInfo,
        createdAt: Timestamp.now().toDate().toString(),
        userId: user.currentUser.uid,
      });
      orderData.push(order);
      const cartRef = collection(db, "cart");
      const q = query(cartRef, where("userId", "==", user.currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((snapshot) => {
        const newDoc = {};
        setDoc(doc(db, "cart", `${snapshot.id}`), newDoc);
      });
      dispatch(fetchCartItems());
      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: { orderData, orderInfo },
      });
      toast.success("Order successfully placed!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(fetchOrders());
      window.location.reload();
    } catch (error: any) {
      dispatch({
        type: PLACE_ORDER_FAIL,
        payload: "Order could not be placed!",
      });
      toast.success("Order could not be placed!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
export const fetchOrders = () => async (dispatch: any) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    });
    const { user } = store.getState();
    const userId = user.currentUser.uid;
    const orderRef = collection(db, "orders");
    const docs = await getDocs(orderRef);
    let orderData: any = [];
    docs.forEach((doc) => {
      if (doc.data().userId === userId) {
        const order = {
          ...doc.data(),
        };
        orderData.push(order);
      }
    });
    dispatch({ type: ORDER_LIST_SUCCESS, payload: orderData });
  } catch (error: any) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: "Some Internal Error!",
    });
    toast.success("Some Internal Error!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
