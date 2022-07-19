import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "./productTypes";

export const productList = () => async (dispatch: any) => {
  const productsData: any = [];
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    const productRef = collection(db, "products");
    const docs = await getDocs(productRef);
    docs.forEach((doc) => {
      const product = {
        id: doc.id,
        ...doc.data(),
      };
      productsData.push(product);
    });
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productsData });
  } catch (error: any) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
