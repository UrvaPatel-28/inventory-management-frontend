import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Sidebar } from "../components/sidebar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex grow">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
