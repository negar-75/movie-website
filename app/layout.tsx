"use client";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";

config.autoAddCss = false;

// const roboto = Roboto({
//   weight: ["400", "700", "100"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });
// const poppins = Poppins({
//   weight: ["400", "700", "100"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="movie website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        ></meta>
      </Head>
      <body className={`  bg-dark`}>{children}</body>
    </html>
  );
}
