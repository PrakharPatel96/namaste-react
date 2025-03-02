import { APP_LOGO } from "../utils/constants";

const HeaderComponent = () => (
  <div className="header">
    <img src={APP_LOGO} className="image" />
    <div className="nav-items">
      <ul className="ul">
        <li className="li">About</li>
        <li className="li">Address</li>
        <li className="li">Contact</li>
      </ul>
    </div>
    <img
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      className="image"
    />
  </div>
);

export default HeaderComponent;
