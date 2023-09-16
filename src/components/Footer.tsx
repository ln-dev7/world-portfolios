import Link from "next/link";
import { GithubSvg } from "./Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          {" "}
          &copy; 2022 - {new Date().getFullYear()} World Portfolios. All rights
          reserved.
        </p>
        <Link
          href="https://github.com/ln-dev7/world-portfolios"
          target="_blank"
        >
          <GithubSvg context="footer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
