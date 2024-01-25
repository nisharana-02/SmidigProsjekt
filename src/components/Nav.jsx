import React from "react";
import "./../css/nav.css";
import Logo from "./../assets/icons/logo.png";
import Search from "./../assets/icons/search.png";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ is_active }) => {

  library.add(fas); 
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={Logo} alt="munch app" />
        </Link>
      </div>
      <div className="nav__primary">
        <ul>
        
          <li>
            <Link
              to="/"
              className={is_active === "stories" ? "active" : null}
            >
              Interactive stories
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={is_active === "events" ? "active" : null}
            >
              Exhibitions & Events
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={is_active === "search" ? "active" : null}
            >
              <FontAwesomeIcon icon="fa-solid fa-search" fontSize="larger" />
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={is_active === "profile" ? "active" : null}
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/signin"
              className={is_active === "logout" ? "active" : null}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
