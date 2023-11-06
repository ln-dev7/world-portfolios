"use client";

import Top from "@/components/ToTop";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { Context } from "@/context/countryContext";
import Link from "next/link";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Not Found",
// };

export default function NotFound() {
  const { countries } = useContext(Context);

  return (
    <div className="App">
      <Top />
      <section className="section">
        <div className="section-intro">
          <div className="section-intro__head">
            <h1>World Portfolios</h1>
            <p>Open source collection of World Portfolios</p>
            <div className="options">
              <Link href="https://github.com/ln-dev7/world-portfolios">
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
          <Link
            className="main-notfound-add"
            href="https://github.com/ln-dev7/world-portfolios/issues/80"
          >
            <span>Add a new country</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
