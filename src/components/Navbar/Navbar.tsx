import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4  bg-on-primary-dark">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="text-white text-xl font-semibold">Chat App</div>

          <div className="space-x-4">
            <NavLink to="/" className="text-white hover:text-gray-300">
              Home
            </NavLink>
       
            <NavLink to="/login" className="text-white hover:text-gray-300">
              Login
            </NavLink>

            <NavLink to="/register" className="text-white hover:text-gray-300">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
