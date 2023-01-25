import { Link, Outlet } from "react-router-dom";
import _192LOGO from "../asset/logo192.png";

export default function Navbar() {
  return (
    <>
      <div>
        <Link to="/">
          <img src={_192LOGO} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
}
