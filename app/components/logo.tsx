"use client";
import Link from "next/link";

type LogoProps = {
  fontSize: string;
  height: string;
};
function Logo({ fontSize, height }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${height}  md:top-4`}>
      <h1 className={`${fontSize} uppercase text-white `}>
        <Link
          href={"/"}
          className="cursor-default"
        >
          <span className="text-red-800 ">CINEMA</span>CITY
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
