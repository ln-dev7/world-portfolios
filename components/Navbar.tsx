"use client";

import Image from "next/image";
import { Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Context } from "@/contexts/countryContext";
import { ThemeContext } from "@/contexts/themeContext";
import {
  CardCloseSvg,
  LogoSvg,
  MergeRequestSvg,
  SubmitFormSvg,
  ThemeSvg,
} from "@/components/icons";

const NavBar = ({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) => {
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    country: { name: countryName, flag: countryFlag },
  } = useContext(Context);
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
              <CardCloseSvg />
            </button>
            <a
              href="https://github.com/ln-dev7/world-portfolios/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              <MergeRequestSvg />
              <span>Submit a Pull Request</span>
            </a>
            <a
              href="https://sharuco.lndev.me/form/view/zf3hEPNse8yK2BKt47GP"
              target="_blank"
              rel="noreferrer"
            >
              <SubmitFormSvg />
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
                alt={`${countryName}`}
                src={`${countryFlag}`}
                width={500}
                height={500}
              />
            </div>
            <a href="https://wp.lndev.me/" className="nav-container-left-logo">
              <LogoSvg />
            </a>
          </div>
          <div className="nav-container-menu">
            <div className="nav-container-menu-search">
              <input
                type="text"
                onChange={handleChangeFilter}
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
              <ThemeSvg theme={theme} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
