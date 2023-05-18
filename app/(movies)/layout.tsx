"use client";

import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/app/components/footer";
config.autoAddCss = false;

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`  bg-dark`}>
      <div className=" w-screen flex flex-col lg:flex-row ">
        <Sidebar />
        <div className="basis-5/6">
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
