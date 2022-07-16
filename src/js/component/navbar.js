import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      	<Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img className="me-5" src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png" width="100" height="100"></img>
        </span>
      </Link>
      <div className="ml-auto">
        <div class="btn-group me-4">
          <button
            class="btn btn-primary btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul class="dropdown-menu">...</ul>
        </div>
      </div>
    </nav>
  );
};
