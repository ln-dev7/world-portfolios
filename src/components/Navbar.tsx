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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="500"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
            </defs>
            <g fill="#059669" fill-opacity="1">
              <g transform="translate(194.836384, 307.103843)">
                <g>
                  <path d="M 16.816406 -236.445312 L 16.816406 -95.183594 L 89.128906 -95.183594 C 115.699219 -95.183594 135.542969 -101.238281 148.996094 -113.007812 C 162.789062 -125.117188 169.515625 -142.605469 169.515625 -165.8125 C 169.515625 -189.023438 162.789062 -206.511719 148.996094 -218.28125 C 135.542969 -230.390625 115.699219 -236.445312 89.128906 -236.445312 Z M 48.769531 -208.191406 L 89.128906 -208.191406 C 103.929688 -208.191406 115.363281 -204.828125 123.4375 -196.757812 C 131.507812 -189.023438 135.542969 -178.59375 135.542969 -165.8125 C 135.542969 -153.035156 131.507812 -143.28125 123.4375 -135.207031 C 115.363281 -127.472656 103.929688 -123.4375 89.128906 -123.4375 L 48.769531 -123.4375 Z M 16.816406 -62.894531 L 16.816406 0 L 48.769531 0 L 48.769531 -62.894531 Z M 16.816406 -62.894531 " />
                </g>
              </g>
            </g>
            <g fill="#059669" fill-opacity="1">
              <g transform="translate(-5.836239, 304.758188)">
                <g>
                  <path d="M 117.09375 -187.351562 L 70.257812 -187.351562 L 70.257812 -140.515625 L 117.09375 -140.515625 Z M 23.417969 -93.675781 L 70.257812 -93.675781 L 70.257812 -140.515625 L 23.417969 -140.515625 Z M 70.257812 -46.839844 L 117.09375 -46.839844 L 117.09375 -93.675781 L 70.257812 -93.675781 Z M 117.09375 0 L 163.933594 0 L 163.933594 -46.839844 L 117.09375 -46.839844 Z M 117.09375 -187.351562 L 163.933594 -187.351562 L 163.933594 -234.191406 L 117.09375 -234.191406 Z M 117.09375 -187.351562 " />
                </g>
              </g>
            </g>
          </svg>
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
          <button onClick={toggleTheme} className="nav-container-menu-mode">
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
