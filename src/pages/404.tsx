import Head from "next/head";

import CardList from "./../components/CardList";
import TagList from "./../components/TagList";
import NavBar from "./../components/Navbar";
import Section from "./../components/Section";
import Top from "./../components/ToTop";
import tags from "./../data/tags";
import Footer from "./../components/Footer";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Cameroon Portfolios - Page NotFound</title>
        <meta name="description" content="Cameroon Portfolios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <Top />
        <Section />

        <main className="main">
          <div className="main-notfound">
            <h2>This page does not exist</h2>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
