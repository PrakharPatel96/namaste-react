import { useState } from "react";
import { Link } from "react-router";
import { APP_LOGO, APP_USER_LOGO } from "../utils/constants";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Logout");

  return (
    <div className="header">
      <Link to="/">
        <img src={APP_LOGO} className="image" />
      </Link>
      <div className="nav-items">
        <ul className="ul">
          <li className="li">
            <Link to="/about">About</Link>
          </li>
          <li className="li">
            <Link to="/address">Address</Link>
          </li>
          <li className="li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="icon-container">
        <img src={APP_USER_LOGO} className="image" />
        <button
          onClick={() => {
            setBtnName((prev) => (prev === "Logout" ? "Login" : "Logout"));
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
