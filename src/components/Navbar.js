import "./../styles/navbar.scss";

const NavBar = ({ onChangeValue }) => {
  const handelChangeFilter = (e) => {
    onChangeValue(e.target.value);
  };

  return (
    <nav className="nav" id="#nav">
      <div className="nav-container">
        <a
          href="https://cameroon-portfolios.vercel.app/"
          className="nav-container-logo"
        >
          <img src="assets/images/logo.svg" alt="logo" />
        </a>
        <div className="nav-container-menu">
          <div className="nav-container-menu-search">
            <input
              type="text"
              onChange={handelChangeFilter}
              placeholder="Search a portfolio ..."
            />
            <button>
              <img src="assets/images/search-eye-line.svg" alt="search" />
            </button>
          </div>
          <a
            href="https://github.com/ln-dev7/cameroon-portfolios/issues/new?assignees=&labels=&template=take-the-porfolio.yaml&title=DO+NOT+EDIT+-+takes+the+porfolio"
            className="nav-container-menu-link"
          >
            <span>Add your portfolio</span>
            <span> + </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
