import { useState, useContext } from "react";
import { Link } from "react-router";
import { APP_LOGO, APP_USER_LOGO } from "../utils/constants";
import useOnlineCheckStatus from "../utils/customHooks/useOnlineCheckStatus";
import UserContext from "../utils/userContext";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Logout");
  const status = useOnlineCheckStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center shadow-md bg-pink-100 sm:bg-amber-100 m-1">
      <Link to="/">
        <img src={APP_LOGO} className="w-15 h-15" />
      </Link>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/address">Address</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <p>Status: {status ? "🟢" : "🔴"}</p>
        <img src={APP_USER_LOGO} className="w-15 h-15" />
        <p className="p-2">User: {loggedInUser}</p>
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
