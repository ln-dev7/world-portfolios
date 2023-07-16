import Head from "next/head";

import Section from "./../components/Section";
import Top from "./../components/ToTop";
import Footer from "./../components/Footer";
import { useContext } from "react";
import { Context } from "@/context/countryContext";
import Link from "next/link.js";

export default function NotFound() {
  const { countries } = useContext(Context);
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
        <section className="section">
          <div className="section-intro">
            <div className="section-intro__head">
              <h1>World Portfolios</h1>
              <p>Open source collection of World Portfolios</p>
              <div className="options">
                <Link href="https://github.com/ln-dev7/world-porfolios">
                  Contribute on github
                </Link>
                <Link href="https://github.com/ln-dev7/world-portfolios/blob/master/CONTRIBUTING.md">
                  Add your portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
        <main className="main">
          <div className="main-notfound">
            <h2>This page does not exist</h2>
            <p>You can search the portfolios of the countries on the list : </p>
            <div className="main-notfound-cards">
              {countries.map((country: any) => (
                <Link key={country.code} href={`/${country.code}`}>
                  <img alt={`${country.name}`} src={`${country.flag}`} />
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
