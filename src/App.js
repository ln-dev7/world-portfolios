import Card from "./components/card";
import NavBar from "./components/navbar";
import Section from "./components/section";
import "./styles/App.scss";
import dataOrder from "./data/dataOrder";
import tags from "./data/tags";
import Footer from "./components/footer";
import { useState } from "react";


const App = () => {
  const [filteredData, setFilteredData] = useState(dataOrder);

  const changeFilterValue = (value) => {
    filterDataByName(value);
  };

  const filterDataByName = (filterValue) => {
    if (filterValue !== "") {
      setFilteredData(
          dataOrder.filter((elem) => {
              return elem.name
                      .toLowerCase()
                      .indexOf(filterValue.toLowerCase()) !== -1
          })
      );
    } else {
      setFilteredData(dataOrder);
    }
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
            <h2>Filter by</h2>
            <div className="main-container-aside-tags">
              <button className="active">All tags</button>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </aside>
          <div className="main-container-body">
            {filteredData.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                link={item.link}
                tags={item.tags}
              />
            ))}
            {filteredData.length === 0 && <h2>No portfolios found ...</h2>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
