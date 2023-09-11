import Image from "next/image";
import { Modal } from "react-bootstrap";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "@/context/countryContext";

const NavBar = ({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) => {
  const handelChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };

  const router = useRouter();

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

  const { country } = useContext(Context);
  const { name: currentCountryName, flag: currentCountryFlag } = country;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmittedOpen = () => {
    setFormSubmitted(true);
  };
  const handleFormSubmittedClose = () => {
    setFormSubmitted(false);
    router.push("/");
  };
  useEffect(() => {
    if (window.location.search.includes("?submittedform=true")) {
      handleFormSubmittedOpen();
    }
  }, []);

  return (
    <>
      <Modal show={formSubmitted} onHide={handleFormSubmittedClose}>
        <div className="submitted-modal">
          <div className="card">
            <p>
              Your form has been successfully submitted, we will process it for
              a maximum of <span>72 hours</span>. If after this time you don’t
              always see your portfolio on the platte form,{" "}
              <a
                href="https://twitter.com/ln_dev7"
                target="_blank"
                rel="noreferrer"
              >
                Leave me a message
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/ln-dev7/world-portfolios/blob/master/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
              >
                submit a PR on GitHub.
              </a>
            </p>
            <button className="card-close" onClick={handleFormSubmittedClose}>
              <span>Okay</span>
            </button>
          </div>
        </div>
      </Modal>

      <Modal show={modalIsOpen} onHide={handleModalClose}>
        <div className="add-modal">
          <div className="card">
            <button className="card-close" onClick={handleModalClose}>
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="#576f7f"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <a
              href="https://github.com/ln-dev7/world-portfolios/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M15 5H17C18.1046 5 19 5.89543 19 7V15.1707C20.1652 15.5825 21 16.6938 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.6938 15.8348 15.5825 17 15.1707V7H15V10L10.5 6L15 2V5ZM5 8.82929C3.83481 8.41746 3 7.30622 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.30622 8.16519 8.41746 7 8.82929V15.1707C8.16519 15.5825 9 16.6938 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.6938 3.83481 15.5825 5 15.1707V8.82929ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19ZM18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
              <span>Submit a Pull Request</span>
            </a>
            <a
              href="https://sharuco.lndev.me/form/view/zf3hEPNse8yK2BKt47GP"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
              <span>Submit a Form</span>
            </a>
          </div>
        </div>
      </Modal>
      <nav className="nav" id="#nav">
        <div className="nav-container">
          <div className="nav-container-left">
            <div className="nav-container-left-flag">
              <Image
                alt={`${currentCountryName}`}
                src={`${currentCountryFlag}`}
                width={500}
                height={500}
              />
            </div>
            <a href="https://wp.lndev.me/" className="nav-container-left-logo">
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
                <g fill="#069668" fillOpacity="1">
                  <g transform="translate(0.88405, 249.875841)">
                    <g>
                      <path d="M 37.238281 2.863281 C 64.738281 2.863281 81.351562 -26.925781 93.382812 -58.433594 L 94.242188 -58.433594 C 92.238281 -24.921875 94.816406 3.152344 120.308594 2.863281 C 167.285156 2.292969 189.628906 -74.191406 199.082031 -128.902344 L 176.453125 -126.039062 C 173.015625 -88.226562 149.238281 -15.183594 122.601562 -15.183594 C 107.417969 -15.183594 110.570312 -71.898438 116.296875 -126.039062 L 96.53125 -126.039062 C 90.230469 -84.789062 60.441406 -15.183594 40.960938 -15.183594 C 26.066406 -15.183594 28.359375 -45.832031 30.363281 -72.757812 C 31.796875 -91.089844 34.375 -109.710938 36.378906 -126.039062 L 15.183594 -126.039062 C 13.75 -108.5625 11.171875 -89.660156 9.738281 -71.039062 C 6.589844 -31.796875 8.019531 2.863281 37.238281 2.863281 Z M 37.238281 2.863281 " />
                    </g>
                  </g>
                </g>
                <g fill="#069668" fillOpacity="1">
                  <g transform="translate(199.087639, 249.875841)">
                    <g>
                      <path d="M -7.449219 56.429688 L 13.464844 56.429688 L 22.34375 0.574219 C 33.226562 2.003906 41.535156 2.863281 48.410156 2.863281 C 64.738281 2.863281 78.773438 -0.859375 89.945312 -8.019531 C 97.679688 -3.152344 105.984375 -0.574219 118.304688 -0.574219 C 140.074219 -0.574219 157.832031 -13.75 169.292969 -34.660156 L 158.691406 -45.257812 C 149.8125 -27.5 136.347656 -15.753906 119.734375 -15.753906 C 114.007812 -15.753906 108.5625 -17.1875 103.980469 -20.335938 C 113.71875 -31.796875 120.308594 -47.550781 123.460938 -67.316406 C 129.761719 -106.558594 118.015625 -128.902344 87.652344 -128.902344 C 71.324219 -128.902344 55.570312 -120.59375 38.957031 -105.984375 L 42.679688 -128.902344 L 21.484375 -126.039062 Z M 48.984375 -14.035156 C 41.535156 -14.035156 34.660156 -15.183594 25.207031 -17.472656 L 36.09375 -87.652344 C 52.421875 -101.117188 67.316406 -112 82.210938 -112 C 101.6875 -112 106.84375 -97.964844 102.546875 -69.320312 C 96.53125 -30.9375 77.339844 -14.035156 48.984375 -14.035156 Z M 48.984375 -14.035156 " />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="nav-container-menu">
            <div className="nav-container-menu-search">
              <input
                type="text"
                onChange={handelChangeFilter}
                placeholder="Search a portfolio ..."
              />
              <button>
                <Image
                  src="assets/search-eye-line.svg"
                  alt="search"
                  width={22}
                  height={22}
                />
              </button>
            </div>
            <button
              onClick={handleModalOpen}
              className="nav-container-menu-link"
            >
              <span>Add your portfolio</span>
              <span> + </span>
            </button>
            <button onClick={toggleTheme} className="nav-container-menu-mode">
              {theme === "light" ? (
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
    </>
  );
};

export default NavBar;
