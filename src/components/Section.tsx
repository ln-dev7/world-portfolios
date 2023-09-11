import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Context } from "@/context/countryContext";
import Country from "@/interfaces/country.interface";

type countryOption = {
  value: string;
  text: string;
}

const Section = () => {
  const router = useRouter();
  const { country, countries } = useContext(Context);
  const { name: currentCountryName } = country;

  let options: countryOption[] = countries.map((c: Country) => {
    return {
      value: c.code,
      text: c.name,
    };
  });

  options = [
    { value: "", text: "What country do you want to consult ?" },
    ...options,
  ];

  const [selected] = useState(options[0].value);
  const handleChange = (e: any) => {
    router.push(`/${e.target.value}`);
  };

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
            <select value={selected} onChange={handleChange}>
              {options.map((option: countryOption) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <span>
            Currently you visit the portfolios of : <span>{currentCountryName}</span>
          </span>
          <div className="list">
            {countries.map((country: Country) => (
              <Link key={country.code} href={`/${country.code}`}>
                <Image
                  alt={country.name}
                  src={country.flag}
                  width={500}
                  height={500}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
