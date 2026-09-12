import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src={LOGO_URL}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;