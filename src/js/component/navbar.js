import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark mb-3" style={{backgroundColor: "#000000"}}>
      <div className="container">
      	<Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img className="me-5" src="https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg" width="100" height="100"></img>
        </span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group me-4">
          <button
            className="btn navbar-btn btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu">
            <Link to="/favorite" className="favorite-link"> {/*Want to filter the favorites by category Character>Planet>Vehicle, then create a link for each li that opens the full version of that favorite character/planet/vehicle */}
              <li className="nav-li">Dummy text</li>
            </Link>
              <li className="nav-li">Dummy text</li>
              <li className="nav-li">Dummy text</li>
          </ul>
        </div>
      </div>
  </div>
    </nav>
  );
};
