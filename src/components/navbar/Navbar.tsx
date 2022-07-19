import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/user/userAction";
import { useSelector, useDispatch } from "react-redux";
import { SIGN_OUT_FAIL } from "../../redux/user/userTypes";

const Navbar = () => {
  toast.configure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);
  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;
  const wishlist = useSelector((state: any) => state.wishlist);
  const { wishlistItems } = wishlist;
  const signOut = async () => {
    try {
      if (currentUser) {
        dispatch(logOut());
        navigate("/", { replace: true });
        window.location.reload();
        toast.success("Logged out Sucessfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error: any) {
      dispatch({ type: SIGN_OUT_FAIL, error: "Cannot Sign Out...Try again!" });
      toast.warning("Cannot Sign Out...Try again!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <>
      <nav className="navbar nav-container">
        <Link className="nav-brand" to="/">
          <span>furni.</span>
        </Link>
        <div className="nav-link dropdown">
          <div className="nav-option user">
            <span className="nav-option1">Hello, </span>
            <span data-testid="currentUser"className="nav-option2">
              {currentUser ? `${currentUser.displayName}` : "Guest"}
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <div className="dropdown-content">
            {currentUser ? (
              <>
                <Link to="/myorders">Orders</Link>
                <Link to="/profile">Profile</Link>
                <button className="logout" onClick={() => signOut()}>
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/profile">Profile</Link>
              </>
            )}
          </div>
        </div>
        <Link className="nav-link" to="/shop">
          <div className="nav-option" title="Shop">
            <span className="nav-option1"></span>
            <span className="nav-option2" title="Products">
              Shop
            </span>
          </div>
        </Link>
        <Link className="nav-link" to="/cart">
          <div className="nav-bag" title="Your Bag">
            <i className="nav-optin1 fa fa-bag-shopping"></i>
            <span className="nav-option2 bag-count">{cartItems.length}</span>
          </div>
        </Link>
        <Link className="nav-link" to="/wishlist">
          <div className="nav-wishlist" title="Your Wishlist">
            <i className="nav-option1 fa fa-heart"></i>
            <span className="nav-option2 wishlist-count">
              {wishlistItems.length}
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
