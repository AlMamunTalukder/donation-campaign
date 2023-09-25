import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const FullLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <div className="py-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default FullLayout;
