import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import "./../styles/globals.scss";
import CountryContextProvider from "@/context/countryContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CountryContextProvider>
        <NextSeo
          title="World Portfolios"
          description="Open source collection of World portfolios"
          canonical="https://wp.lndev.me/"
          openGraph={{
            url: "https://wp.lndev.me/",
            title: "World Portfolios",
            description: "Open source collection of World portfolios",
            images: [
              {
                url: "https://wp.lndev.me/assets/banner.png",
                alt: "World Portfolios",
                type: "image/jpeg",
                secureUrl: "https://wp.lndev.me/assets/banner.png",
              },
            ],
            siteName: "World Portfolios",
          }}
          twitter={{
            handle: "@ln_dev7",
            site: "@ln_dev7",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </CountryContextProvider>
    </>
  );
}
