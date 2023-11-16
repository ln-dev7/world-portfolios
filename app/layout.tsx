import type { Metadata } from "next";
import Providers from "@/utils/provider";
import "@/styles/globals.scss";
import { inter, overpass } from "@/utils/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | World Portfolios",
    default: "World Portfolios",
  },
  description: "Open source collection of World portfolios",
  metadataBase: new URL("https://wp.lndev.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wp.lndev.me",
    siteName: "World Portfolios",
    images: [
      {
        url: "https://wp.lndev.me/assets/banner.png",
        width: 1728,
        height: 1117,
        alt: "World Portfolios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ln_dev7",
    creator: "@ln_dev7",
    images: [
      {
        url: "https://wp.lndev.me/assets/banner.png",
        width: 1728,
        height: 1117,
        alt: "World Portfolios",
      },
    ],
  },
  authors: [{ name: "Leonel NGOYA", url: "https://leonelngoya.com" }],
  keywords: "portfolio, opensource, world, github",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${overpass.variable}`}>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2222017759396595"
        ></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2222017759396595"
     crossOrigin="anonymous"></script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
