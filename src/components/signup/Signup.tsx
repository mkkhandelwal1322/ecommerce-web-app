import React from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/user/userAction";
import { SIGN_UP_FAIL } from "../../redux/user/userTypes";
import { Button, Input, Heading } from "../../styles/Style";

const Signup = () => {
  toast.configure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, currentUser, error } = useSelector(
    (state: any) => state.user
  );
  const initialFormValues: SignUpData = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const setData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (formValues.password !== formValues.confirmPassword) {
        toast.error("Password do not match!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        dispatch(
          signUp(
            formValues.email,
            formValues.password,
            formValues.firstName,
            formValues.lastName,
            formValues.phoneNumber
          )
        );
        toast.success("Account created Successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/", { replace: true });
        setFormValues(initialFormValues);
      }
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
  React.useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser]);
  return (
    <>
      <div className="signup-section">
        <Heading>Sign Up</Heading>
        <form onSubmit={setData}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button className="signup" type="submit" disabled={loading}>
            Sign Up
          </Button>
        </form>
        <span>
          Already have an account? <Link to="/signin">Sign In!</Link>
        </span>
      </div>
    </>
  );
};

export default Signup;
