import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NavBar = ({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) => {
  const handelChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };

  // Theme Gestions

  const [theme, setTheme] = useState("light");
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="nav" id="#nav">
      <div className="nav-container">
        <a
          href="https://cameroon-portfolios.vercel.app/"
          className="nav-container-logo"
        >
          <Image
            src="assets/images/logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </a>
        <div className="nav-container-menu">
          <div className="nav-container-menu-search">
            <input
              type="text"
              onChange={handelChangeFilter}
              placeholder="Search a portfolio ..."
            />
            <button>
              <Image
                src="assets/images/search-eye-line.svg"
                alt="search"
                width={22}
                height={22}
              />
            </button>
          </div>
          <a
            href="https://github.com/ln-dev7/cameroon-portfolios/blob/master/CONTRIBUTING.md"
            className="nav-container-menu-link"
          >
            <span>Add your portfolio</span>
            <span> + </span>
          </a>
          <button
            onClick={toggleTheme}
            className={
              theme === "light"
                ? "nav-container-menu-mode dark"
                : "nav-container-menu-mode light"
            }
          >
            {theme === "light" ? (
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="#576f7f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
              </svg>
            ) : (
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="#576f7f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="m4.22 4.22 1.42 1.42"></path>
                <path d="m18.36 18.36 1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="m4.22 19.78 1.42-1.42"></path>
                <path d="m18.36 5.64 1.42-1.42"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
