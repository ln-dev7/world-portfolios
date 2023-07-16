import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import "./../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="World Portfolios"
        description="Open source collection of World portfolios"
        canonical="https://world-portfolios.vercel.app/"
        openGraph={{
          url: "https://world-portfolios.vercel.app/",
          title: "World Portfolios",
          description: "Open source collection of World portfolios",
          images: [
            {
              url: "https://world-portfolios.vercel.app/assets/images/banner.png",
              alt: "World Portfolios",
              type: "image/jpeg",
              secureUrl:
                "https://world-portfolios.vercel.app/assets/images/banner.png",
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
    </>
  );
}
