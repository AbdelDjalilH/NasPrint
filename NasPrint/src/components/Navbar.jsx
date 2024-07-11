import { Link } from "react-router-dom";
import logoNas from "../assets/navImages/logoNas.png";

export default function Navbar() {
  return (
    <nav>
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
