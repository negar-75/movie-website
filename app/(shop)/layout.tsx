"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/app/components/navbar";
config.autoAddCss = false;

export default function DrinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100vh] ">
      <Navbar />
      {children}
    </div>
  );
}
