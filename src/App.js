import CardList from "./components/CardList";
import TagList from "./components/TagList";
import NavBar from "./components/Navbar";
import Section from "./components/Section";
import Top from './components/ToTop.js'
import "./styles/App.scss";
import dataOrder from "./data/dataOrder";
import tags from "./data/tags";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [filteredData, setFilteredData] = useState(dataOrder);
  const [selectedTags, setSelectedTags] = useState(["all"]);

  const setTag = (tag) => {
    if (tag === "all") setSelectedTags(["all"]);
    else if (selectedTags.indexOf(tag) !== -1)
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    else
      setSelectedTags([...selectedTags.filter((t) => t !== "all"), ...[tag]]);
  };

  const filterByName = (filterValue) => {
    if (filterValue !== "")
      setFilteredData(
        dataOrder.filter((elem) => {
          return (
            elem.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
        })
      );
    else setFilteredData(dataOrder);
  };

  useEffect(() => {
    if (selectedTags.indexOf("all") === -1 && selectedTags.length > 0) {
      setFilteredData(
        dataOrder.filter((elem) => selectedTags.every(tag => elem.tags.map(e => e.toLowerCase()).includes(tag)))
      );
    } else setFilteredData(dataOrder);
  }, [selectedTags]);



  return (
    <div className="App">
      <Top />
      <NavBar onChangeValue={filterByName} />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <TagList tags={tags} setTag={setTag} selectedTags={selectedTags} />
          </aside>
          <div className="main-container-body">
            <CardList filteredData={filteredData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
