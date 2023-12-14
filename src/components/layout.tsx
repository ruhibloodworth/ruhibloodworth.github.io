import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "./main.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="doc-container">
      <header>
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      </header>
      <main>{children}</main>
      <footer>© 2023 Ruhi Bloodworth</footer>
    </div>
  );
};

export default Layout;
