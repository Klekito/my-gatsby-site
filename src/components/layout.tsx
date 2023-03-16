import * as React from "react";
import { Link } from "gatsby";
import * as layoutStyles from "./layout.module.css";

type LayoutProps = {
  pageTitle: string;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <nav>
        <ul className={layoutStyles.navLinks}>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/" className={layoutStyles.navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={layoutStyles.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={layoutStyles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
