import Image from "next/image";
import Logo from "@/app/components/logo";
import { Fragment } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex h-screen text-[#807979]">
      <div className="md:w-1/2  w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={
              "https://source.unsplash.com/turned-on-led-projector-on-table-MAYsdoYpGuk"
            }
            alt="turned-on-led-projector-on-table"
            fill={true}
          />
        </div>
      </div>
      <div className="w-1/2 p-5 flex flex-col items-center justify-center relative">
        <div className = 'absolute top-5' >
        <Logo fontSize="text-[2.7rem]" height="h-20" />
        </div>
      
        {children}
      </div>
    </div>
  );
}
