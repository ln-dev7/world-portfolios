import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import "./../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Cameroonian Portfolios"
        description="Open source collection of Cameroonian portfolios"
        canonical="https://cameroon-portfolios.vercel.app/"
        openGraph={{
          url: "https://cameroon-portfolios.vercel.app/",
          title: "Cameroonian Portfolios",
          description: "Open source collection of Cameroonian portfolios",
          images: [
            {
              url: "https://cameroon-portfolios.vercel.app/assets/images/banner.png",
              alt: "Cameroonian Portfolios",
              type: "image/jpeg",
              secureUrl:
                "https://cameroon-portfolios.vercel.app/assets/images/banner.png",
            },
          ],
          siteName: "Cameroonian Portfolios",
        }}
        twitter={{
          handle: "@ln_dev7",
          site: "@ln_dev7",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
