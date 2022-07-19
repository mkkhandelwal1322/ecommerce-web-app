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
  ADD_WISHLIST_ITEM_REQUEST,
  ADD_WISHLIST_ITEM_SUCCESS,
  ADD_WISHLIST_ITEM_FAIL,
  FETCH_WISHLIST_ITEMS_REQUEST,
  FETCH_WISHLIST_ITEMS_SUCCESS,
  FETCH_WISHLIST_ITEMS_FAIL,
  REMOVE_WISHLIST_ITEM_REQUEST,
  REMOVE_WISHLIST_ITEM_SUCCESS,
  REMOVE_WISHLIST_ITEM_FAIL,
} from "./wishlistTypes";

export const addToWishlist =
  (wishlistItem: Product) => async (dispatch: any) => {
    try {
      dispatch({ type: ADD_WISHLIST_ITEM_REQUEST });
      const { user } = store.getState();
      const wishlistRef = collection(db, "wishlist");
      const wishlistItems = {
        id: wishlistItem.id,
        name: wishlistItem.name,
        category: wishlistItem.category,
        price: wishlistItem.price,
        description: wishlistItem.description,
        image: wishlistItem.image,
      };
      if (user.currentUser) {
        const wishlist = await addDoc(wishlistRef, {
          userId: user.currentUser.uid,
          ...wishlistItems,
        });
        dispatch({ type: ADD_WISHLIST_ITEM_SUCCESS, payload: wishlist });
        toast.success(wishlistItem.name + " added successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error: any) {
      toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT });
      dispatch({ tyep: ADD_WISHLIST_ITEM_FAIL, payload: error.message });
    }
  };
export const fetchWishlistItems = () => async (dispatch: any) => {
  try {
    dispatch({ type: FETCH_WISHLIST_ITEMS_REQUEST });
    const { user } = store.getState();
    const userId = user.currentUser.uid;
    const wishlistRef = collection(db, "wishlist");
    const docs = await getDocs(wishlistRef);
    let wishlistData: any = [];
    docs.forEach((doc) => {
      if (doc.data().userId === userId) {
        const wishlist = {
          docId: doc.id,
          ...doc.data(),
        };
        wishlistData.push(wishlist);
      }
    });
    dispatch({ type: FETCH_WISHLIST_ITEMS_SUCCESS, payload: wishlistData });
  } catch (error: any) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT });
    dispatch({ type: FETCH_WISHLIST_ITEMS_FAIL, payload: error.message });
  }
};
export const deleteFromWishlist =
  (wishlistItem: any) => async (dispatch: any) => {
    try {
      dispatch({ type: REMOVE_WISHLIST_ITEM_REQUEST });
      const wishlistRef = collection(db, "wishlist");
      const deleteDocRef = doc(wishlistRef, wishlistItem.docId);
      await deleteDoc(deleteDocRef);
      dispatch({ type: REMOVE_WISHLIST_ITEM_SUCCESS });
      window.location.reload();
    } catch (error: any) {
      toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT });
      dispatch({ tyep: REMOVE_WISHLIST_ITEM_FAIL, payload: error.message });
    }
  };
