import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../Features/authSlice";
import type { AppDispatch, RootState } from "../../Store/store";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.value);

  return (
    <>
      <nav className="p-4 bg-primary-container flex text-on-primary-container">
        <div className="text-white text-xl font-semibold">Inventory</div>

        <div className="ml-auto flex gap-4">
          <NavLink
            to="/"
            className="hover:bg-primary-container-hover py-1 rounded-full px-3"
          >
            Home
          </NavLink>

          {!user ? (
            <>
              <NavLink
                to="/signin"
                className="hover:bg-primary-container-hover py-1 rounded-full px-3"
              >
                SignIn
              </NavLink>

              <NavLink
                to="/signup"
                className="hover:bg-primary-container-hover py-1 rounded-full px-3"
              >
                SignUp
              </NavLink>
            </>
          ) : (
            <NavLink
              onClick={() => dispatch(logout())}
              to="/signin"
              className="hover:bg-primary-container-hover py-1 rounded-full px-3"
            >
              Logout
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
