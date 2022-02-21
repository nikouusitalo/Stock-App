69 lines (63 sloc) 1.81 KB
import React, {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



//auth

  return (
    <nav className="header">
      
        <h3>TRADER</h3>
        <span className="header__line" />
        <h6>ALPHA</h6>
      </div>
      {logged === false ? (
        <ul className="header__menu">
          <Link to={url}>
            <li>
              <button type="submit" className="header__button-login">
                {name}
              </button>
            </li>
          </Link>
          <Link to={url2}>
            <li>
              <button type="submit" className="header__button-register">
                {name2}
              </button>
            </li>
          </Link>
        </ul>
      ) : (
        <Link to="/dashboard">
          <button type="submit" className="header__button-register">
            DASHBOARD
          </button>
        </Link>
      )}
    </nav>
  );
}
LandingMenu.propTypes = {
  url: PropTypes.string,
  url2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
};

export default LandingMenu;