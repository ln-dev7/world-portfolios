import type { Metadata } from "next";
import { Inter, Overpass } from "next/font/google";
import Providers from "@/utils/provider";
import "@/styles/globals.scss";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const overpass = Overpass({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
  authors: [{ name: "Leonel NGOYA", url: "https://wp.lndev.me" }],
  keywords: "portfolio, opensource, world, github",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${overpass.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
