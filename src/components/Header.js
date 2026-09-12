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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;