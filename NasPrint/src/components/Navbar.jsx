import { Link } from "react-router-dom";
import logoNas from "../assets/navImages/logoNas.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={logoNas} alt="" />
      </Link>
      <ul>
        <li>
          <Link>A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
