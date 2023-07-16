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

  const [theme, setTheme] = useState("dark");
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
          href="https://world-portfolios.vercel.app/"
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
            <g fill="#069668" fill-opacity="1">
              <g transform="translate(0.88405, 249.875841)">
                <g>
                  <path d="M 37.238281 2.863281 C 64.738281 2.863281 81.351562 -26.925781 93.382812 -58.433594 L 94.242188 -58.433594 C 92.238281 -24.921875 94.816406 3.152344 120.308594 2.863281 C 167.285156 2.292969 189.628906 -74.191406 199.082031 -128.902344 L 176.453125 -126.039062 C 173.015625 -88.226562 149.238281 -15.183594 122.601562 -15.183594 C 107.417969 -15.183594 110.570312 -71.898438 116.296875 -126.039062 L 96.53125 -126.039062 C 90.230469 -84.789062 60.441406 -15.183594 40.960938 -15.183594 C 26.066406 -15.183594 28.359375 -45.832031 30.363281 -72.757812 C 31.796875 -91.089844 34.375 -109.710938 36.378906 -126.039062 L 15.183594 -126.039062 C 13.75 -108.5625 11.171875 -89.660156 9.738281 -71.039062 C 6.589844 -31.796875 8.019531 2.863281 37.238281 2.863281 Z M 37.238281 2.863281 " />
                </g>
              </g>
            </g>
            <g fill="#069668" fill-opacity="1">
              <g transform="translate(199.087639, 249.875841)">
                <g>
                  <path d="M -7.449219 56.429688 L 13.464844 56.429688 L 22.34375 0.574219 C 33.226562 2.003906 41.535156 2.863281 48.410156 2.863281 C 64.738281 2.863281 78.773438 -0.859375 89.945312 -8.019531 C 97.679688 -3.152344 105.984375 -0.574219 118.304688 -0.574219 C 140.074219 -0.574219 157.832031 -13.75 169.292969 -34.660156 L 158.691406 -45.257812 C 149.8125 -27.5 136.347656 -15.753906 119.734375 -15.753906 C 114.007812 -15.753906 108.5625 -17.1875 103.980469 -20.335938 C 113.71875 -31.796875 120.308594 -47.550781 123.460938 -67.316406 C 129.761719 -106.558594 118.015625 -128.902344 87.652344 -128.902344 C 71.324219 -128.902344 55.570312 -120.59375 38.957031 -105.984375 L 42.679688 -128.902344 L 21.484375 -126.039062 Z M 48.984375 -14.035156 C 41.535156 -14.035156 34.660156 -15.183594 25.207031 -17.472656 L 36.09375 -87.652344 C 52.421875 -101.117188 67.316406 -112 82.210938 -112 C 101.6875 -112 106.84375 -97.964844 102.546875 -69.320312 C 96.53125 -30.9375 77.339844 -14.035156 48.984375 -14.035156 Z M 48.984375 -14.035156 " />
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
            href="https://github.com/ln-dev7/world-portfolios/blob/master/CONTRIBUTING.md"
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
