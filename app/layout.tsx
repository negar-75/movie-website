"use client";
import "./globals.css";
import { Roboto, Poppins } from "@next/font/google";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
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
  return (
    <html lang="en">
      <body className={`${roboto.className} ${poppins.className}  bg-dark`}>
        <div className=" w-screen flex flex-col lg:flex-row ">
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
