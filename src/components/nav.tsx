import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Brand from "../../content/assets/placeholder.com-logo3.png";

const Nav = props => {
  const active = (path, to, label) => {
    if (path === to) {
      return (
        <Link to={to} className="navbar-item is-active">
          <li>{label}</li>
        </Link>
      );
    } else {
      return (
        <Link to={to} className="navbar-item">
          <li>{label}</li>
        </Link>
      );
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={Brand} alt="" />
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <ul className="navbar-menu" id="navbarOpen">
        <div className="navbar-end">
          {active(props.path, "/", "Home")}
          {active(props.path, "/portfolio", "Portfolio")}
          {active(props.path, "/shop", "Shop")}
          {active(props.path, "/about", "About me")}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
