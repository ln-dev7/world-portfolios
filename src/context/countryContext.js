import React, { createContext, useEffect, useState } from "react";
import countries from "@/countries/countries";
import { useRouter } from "next/router";

export const Context = createContext();

const CountryContextProvider = ({ children }) => {
  const defaultCountry = countries.find((c) => c.code === "cm");
  const [country, setCountry] = useState(defaultCountry);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const countryCode = pathSegments[pathSegments.length - 1];
    if (countryCode) {
      const country = countries.find((country) => country.code === countryCode);
      if (country) setCountry(country);
    }
  }, [pathname]);

  return (
    <Context.Provider value={{ country, countries }}>
      {children}
    </Context.Provider>
  );
};

export default CountryContextProvider;
