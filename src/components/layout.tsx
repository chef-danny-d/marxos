import React from "react";
import Nav from "../components/nav";
import "../index.sass";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Nav path={location.pathname} />
      </header>
      <main className="global-main container">{children}</main>
      <footer className="global-footer">
        © {new Date().getFullYear()}, Built with ❤️ using
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
