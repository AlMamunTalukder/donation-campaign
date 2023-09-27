import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="w-[150px]">
      <NavLink to="/">
        <img src="https://i.ibb.co/93b7zZF/image.png" alt="" />
      </NavLink>
    </div>
  );
};

export default Logo;
