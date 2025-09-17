import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { asyncLogoutUser } from "../src/store/actions/UserActions";
const Nav = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const user = useSelector((state) => state.userReducer.users);

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigator('/')
  }
  return (
    <nav className="flex justify-center gap-7 p-2">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>

      {user ? (
        <>
          {user && user.isAdmin && (
            <NavLink to="/admin/create-product">Create Products</NavLink>
          )}
          <NavLink to="/admin/update-product/:id">Update Products</NavLink>
          <NavLink to="/admin/user-profile">Profile</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <button onClick={LogoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
