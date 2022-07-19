import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth, db } from "../../utils/firebase";
import { ADD_CART_ITEM_SUCCESS } from "../cart/cartTypes";
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

toast.configure();
export const signUp =
  (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) =>
  async (dispatch: any) => {
    try {
      dispatch({ type: SIGN_UP_REQUEST });
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const userRef = collection(db, "users");
      updateProfile(user, {
        displayName: firstName + " " + lastName,
      });
      await addDoc(userRef, {
        userId: user.uid,
        firstName: firstName,
        lastName: lastName,
        name: firstName + " " + lastName,
        email: email,
        phoneNumber: phoneNumber,
      });
      dispatch({ type: SIGN_UP_SUCCESS, payload: user });
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          dispatch({ type: SIGN_UP_FAIL, payload: "Email already exists!" });
          toast.error("Email already exists!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        case "auth/invalid-email":
          dispatch({ type: SIGN_UP_FAIL, payload: "Email is invalid!" });
          toast.error("Email is invalid!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        case "auth/weak-password":
          dispatch({
            type: SIGN_UP_FAIL,
            payload: "Password must be 6 digits long!",
          });
          toast.error("Password must be 6 digits long!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        default:
          dispatch({ type: SIGN_UP_FAIL, payload: "Some internal error!" });
          toast.error("Some internal error!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      }
    }
  };
export const signIn =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({ type: SIGN_IN_REQUEST });
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      dispatch({ type: SIGN_IN_SUCCESS, payload: user });
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          dispatch({ type: SIGN_IN_FAIL, payload: "Email is invalid!" });
          toast.error("Email is invalid!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        default:
          dispatch({ type: SIGN_IN_FAIL, payload: "Some internal error!" });
          toast.error("Some internal error!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      }
    }
  };
export const logOut = () => async (dispatch: any) => {
  try {
    dispatch({ type: SIGN_OUT_REQUEST });
    signOut(auth);
    dispatch({ type: SIGN_OUT_SUCCESS });
  } catch (error: any) {
    dispatch({ type: SIGN_OUT_FAIL, error: "Cannot Sign Out...Try again!" });
    toast.warning("Cannot Sign Out...Try again!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
export const setUser = (user: User | null) => async (dispatch: any) => {
  dispatch({ type: SET_USER, payload: user });
};
