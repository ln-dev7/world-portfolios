import CardList from "./components/CardList";
import TagList from "./components/TagList";
import NavBar from "./components/Navbar";
import Section from "./components/Section";
import "./styles/App.scss";
import dataOrder from "./data/dataOrder";
import tags from "./data/tags";
import Footer from "./components/Footer";
import { useState } from "react";


const App = () => {
  const [filteredData, setFilteredData] = useState(dataOrder);

  const changeFilterValue = (filterValue) => {
    if (filterValue !== "")
      setFilteredData(
          dataOrder.filter((elem) => {
              return elem.name
                      .toLowerCase()
                      .indexOf(filterValue.toLowerCase()) !== -1
          })
      );
    else setFilteredData(dataOrder);
  };

  return (
    <div className="App">
      <a href="/">
        <img
          className="to-top"
          src="assets/images/arrow-up-circle-fill.svg"
          alt="arrow-up"
        />
      </a>
      <NavBar onChangeValue={changeFilterValue} />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <TagList tags={tags}/>
          </aside>
          <div className="main-container-body">
            <CardList filteredData={filteredData}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
