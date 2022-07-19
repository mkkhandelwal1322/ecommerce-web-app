import React from "react";
import "./Signin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/user/userAction";
import { SIGN_IN_FAIL } from "../../redux/user/userTypes";
import { Button, Input, Heading } from "../../styles/Style";

const Signin = () => {
  toast.configure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, currentUser, error } = useSelector(
    (state: any) => state.user
  );
  const initialSignInValues: SignInData = {
    email: "",
    password: "",
  };
  const [signInFormValues, setSignInFormValues] =
    React.useState(initialSignInValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInFormValues({ ...signInFormValues, [name]: value });
  };
  const getData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!signInFormValues.password || !signInFormValues.email) {
        toast.error("Enter credentials!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        dispatch(signIn(signInFormValues.email, signInFormValues.password));
        setSignInFormValues(initialSignInValues);
        toast.success("Signed In successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/", { replace: true });
      }
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
  React.useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser]);
  return (
    <>
      <div className="signin-section">
        <Heading>Sign In</Heading>
        <form onSubmit={getData}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={signInFormValues.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={signInFormValues.password}
            onChange={handleChange}
            required
          />
          <Button className="signin" type="submit" disabled={loading}>
            Sign In
          </Button>
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up!</Link>
        </span>
      </div>
    </>
  );
};

export default Signin;
