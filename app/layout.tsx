"use client";
import "./globals.css";
import { Roboto, Poppins } from "@next/font/google";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "react-responsive";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
config.autoAddCss = false;

const roboto = Roboto({
  weight: ["400", "700", "100"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  weight: ["400", "700", "100"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  // const isBigScreen = useMediaQuery({ minWidth: 1824 });
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${roboto.className} ${poppins.className}  bg-dark`}>
        <div className=" w-screen flex ">
          <Sidebar />
          <div className="basis-5/6">
            <Navbar />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
