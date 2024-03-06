import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../Features/authSlice";
import type { AppDispatch, RootState } from "../../Store/store";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.value);

  return (
    <>
      <nav className="bg-gray-800 p-4  bg-on-primary-dark">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="text-white text-xl font-semibold">Inventory</div>

          <div className="space-x-4">
            <NavLink to="/" className="text-white hover:text-gray-300">
              Home
            </NavLink>

            {!user ? (
              <>
                <NavLink
                  to="/signin"
                  className="text-white hover:text-gray-300"
                >
                  SignIn
                </NavLink>

                <NavLink
                  to="/signup"
                  className="text-white hover:text-gray-300"
                >
                  SignUp
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  onClick={() => dispatch(logout())}
                  to="/signin"
                  className="text-white hover:text-gray-300"
                >
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
