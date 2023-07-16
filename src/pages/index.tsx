import Head from "next/head";

import CardList from "./../components/CardList";
import TagList from "./../components/TagList";
import NavBar from "./../components/Navbar";
import Section from "./../components/Section";
import Top from "./../components/ToTop";
// import "./styles/App.scss";
import dataOrder from "./../data/dataOrder";
import tags from "./../data/tags";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [filteredData, setFilteredData] = useState(dataOrder);
  const [selectedTags, setSelectedTags] = useState(["all"]);

  const setTag = (tag: string) => {
    if (tag === "all") setSelectedTags(["all"]);
    else if (selectedTags.indexOf(tag) !== -1)
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    else
      setSelectedTags([...selectedTags.filter((t) => t !== "all"), ...[tag]]);
  };

  const filterByName = (filterValue: string) => {
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
        dataOrder.filter((elem) =>
          selectedTags.every((tag) =>
            elem.tags.map((e) => e.toLowerCase()).includes(tag)
          )
        )
      );
    } else setFilteredData(dataOrder);
  }, [selectedTags]);

  return (
    <>
      <Head>
        <title>World Portfolios</title>
        <meta name="description" content="World Portfolios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <Top />
        <NavBar onChangeValue={filterByName} />
        <Section />
        <main className="main">
          <div className="main-container">
            <aside className="main-container-aside">
              <TagList
                tags={tags}
                setTag={setTag}
                selectedTags={selectedTags}
              />
            </aside>
            <div className="main-container-body">
              <CardList filteredData={filteredData} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
