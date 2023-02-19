import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          {" "}
          &copy; 2022 - {new Date().getFullYear()}Cameroon Portfolios. All
          rights reserved.
        </p>
        <Link
          href="https://github.com/ln-dev7/cameroon-portfolios"
          target="_blank"
        >
          <Image
            src="assets/images/github-fill.svg"
            alt="github"
            width={36}
            height={36}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
