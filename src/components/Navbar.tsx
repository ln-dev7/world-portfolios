import Image from "next/image";

const NavBar = ({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) => {
  const handelChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
  };

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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
