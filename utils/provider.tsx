"use client";
import CountryContextProvider from "@/contexts/countryContext";
export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <CountryContextProvider>{children}</CountryContextProvider>
  );
}