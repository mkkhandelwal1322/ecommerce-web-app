import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../utils/firebase";
import store from "../store";
import {
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_FAIL,
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAIL,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_FAIL,
  REMOVE_CART_ITEM_SUCCESS,
} from "./cartTypes";

export const deleteFromCart = (cartItem: any) => async (dispatch: any) => {
  try {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });
    const cartRef = collection(db, "cart");
    const deleteDocRef = doc(cartRef, cartItem.docId);
    await deleteDoc(deleteDocRef);
    toast.success(cartItem.name + " was successfully deleted", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS });
    dispatch(fetchCartItems());
  } catch (error: any) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT });
    dispatch({ tyep: REMOVE_CART_ITEM_FAIL, payload: error.message });
  }
};
export const fetchCartItems = () => async (dispatch: any) => {
  try {
    dispatch({ type: FETCH_CART_ITEMS_REQUEST });
    const { user } = store.getState();
    const userId = user.currentUser.uid;
    const cartRef = collection(db, "cart");
    const docs = await getDocs(cartRef);
    let cartData: any = [];
    docs.forEach((doc) => {
      if (doc.data().userId === userId) {
        const cart = {
          docId: doc.id,
          ...doc.data(),
        };
        cartData.push(cart);
      }
    });
    dispatch({ type: FETCH_CART_ITEMS_SUCCESS, payload: cartData });
  } catch (error: any) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT });
    dispatch({ type: FETCH_CART_ITEMS_FAIL, payload: error.message });
  }
};
export const addToCart = (cartItem: Product) => async (dispatch: any) => {
  try {
    dispatch({ type: ADD_CART_ITEM_REQUEST });
    const { user } = store.getState();
    const cartData = [];
    const cartRef = collection(db, "cart");
    const cartItems = {
      id: cartItem.id,
      name: cartItem.name,
      category: cartItem.category,
      price: cartItem.price,
      description: cartItem.description,
      image: cartItem.image,
      quantity: 1,
    };
    if (user.currentUser) {
      const cart = await addDoc(cartRef, {
        userId: user.currentUser.uid,
        ...cartItems,
      });
      cartData.push(cart);
      dispatch({ type: ADD_CART_ITEM_SUCCESS, payload: cartData });
      dispatch(fetchCartItems());
      toast.success(cartItem.name + " added successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.warning("Please Login to cart Product to cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  } catch (error: any) {
    toast.error(cartItem.name + " cannot be added!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    dispatch({ tyep: ADD_CART_ITEM_FAIL, payload: error.message });
  }
};
