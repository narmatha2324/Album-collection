import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul id="navItem">
        <li>
          <Link to="/">Home</Link>
        </li>
        <h1>Album Collection</h1>
        <li>
          <Link to="/createAlbum">Create Album</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
