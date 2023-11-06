"use client";
import CountryContextProvider from "@/context/countryContext";
export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <CountryContextProvider>{children}</CountryContextProvider>
  );
}