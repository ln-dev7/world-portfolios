import Head from "next/head";

import CardList from "./../components/CardList";
import TagList from "./../components/TagList";
import NavBar from "./../components/Navbar";
import Section from "./../components/Section";
import Top from "./../components/ToTop";
import cdData from "@/data/cdData";
import extractTags from "@/utils/extractTags";
import Footer from "./../components/Footer";
import MainLogic from "@/utils/mainLogic";

export default function RepubliqueDemocratiqueDuCongo() {
  const { filteredData, selectedTags, setTag, filterByName } =
    MainLogic(cdData);

  return (
    <>
      <Head>
        <title>World Portfolios - République démocratique du Congo</title>
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
                tags={extractTags(cdData)}
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
