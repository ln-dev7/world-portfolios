import React, { createContext, useEffect, useState } from "react";
import countries from "@/countries/countries";
import { useRouter } from "next/router";

export const Context = createContext();

const CountryContextProvider = ({ children }) => {
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [countryNumberCode, setCountryNumberCode] = useState("");

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const desiredValue = pathSegments[pathSegments.length - 1];
    if (desiredValue) {
      setCountryCode(desiredValue);
      setCountryName(
        countries.find((country) => country.code === desiredValue)?.name
      );
      setCountryFlag(
        countries.find((country) => country.code === desiredValue)?.flag
      );
      setCountryNumberCode(
        countries.find((country) => country.code === desiredValue)?.numberCode
      );
    } else {
      setCountryCode("cm");
      setCountryName("Cameroon");
      setCountryFlag("/assets/images/cm/flag.png");
      setCountryNumberCode("237");
    }
  }, [pathname]);

  return (
    <Context.Provider
      value={{ countryCode, countryName, countryFlag, countryNumberCode, countries }}
    >
      {children}
    </Context.Provider>
  );
};

export default CountryContextProvider;
