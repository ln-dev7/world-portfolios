"use client";

import CardList from "@/components/CardList";
import TagList from "@/components/TagList";
import NavBar from "@/components/Navbar";
import Section from "@/components/Section";
import Top from "@/components/ToTop";
import extractTags from "@/utils/extractTags";
import Footer from "@/components/Footer";
import MainLogic from "@/utils/mainLogic";
import cmData from "@/data/cmData";
import { Metadata } from "next";

export default function CM() {
  const { filteredData, selectedTags, setTag, filterByName } =
    MainLogic(cmData);

  return (
    <div className="App">
      <Top />
      <NavBar onChangeValue={filterByName} />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <TagList
              filteredData={filteredData}
              tags={extractTags(cmData)}
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
  );
}
