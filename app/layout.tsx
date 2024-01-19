import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import ProfileProvider from "../context/context";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="movie website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        ></meta>
      </Head>
      <body className={` bg-dark`}>
        <ProfileProvider>{children}</ProfileProvider>
      </body>
    </html>
  );
}
