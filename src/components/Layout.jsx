import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <footer>Geeks 2023</footer>
    </>
  );
};
export default Layout;
