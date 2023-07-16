import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/countryContext";

const Section = () => {
  const router = useRouter();

  //
  const {
    countryCode,
    countryName,
    countryFlag,
    countryNumberCode,
    countries,
  } = useContext(Context);
  return (
    <section className="section">
      <div className="section-intro">
        <div className="section-intro__head">
          <h1>World Portfolios</h1>
          <p>Open source collection of World Portfolios</p>
          <div className="options">
            <Link href="https://github.com/ln-dev7/world-portfolios">
              Contribute on github
            </Link>
            <select onChange={(e) => router.push(`/${e.target.value}`)}>
              <option value="" disabled selected>
                What country do you want to consult ?
              </option>
              {countries.map((country: any) => (
                <option
                  key={country.code}
                  value={country.code}
                  disabled={country.code == countryCode}
                >
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <span>
            Currently you visit the porfolios of : <span>{countryName}</span>
          </span>
          <div className="list">
            {countries.map((country: any) => (
              <Link key={country.code} href={`/${country.code}`}>
                <img alt={`${country.name}`} src={`${country.flag}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
