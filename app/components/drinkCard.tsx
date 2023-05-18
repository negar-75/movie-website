"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { playfair_display, poppins } from "../../styles/font";

type DrinkProps = {
  imageUrl: string;
  desc?: string;
  title?: string;
};

function DrinkCard({ imageUrl, desc, title }: DrinkProps) {
  return (
    <div
      style={{ "--image-url": `url(${imageUrl})` } as React.CSSProperties}
      className={`md:flex md:flex-row  md:h-[550px] h-[600px] rounded-lg overflow-hidden relative max-[640px]:bg-[image:var(--image-url)] max-[640px]:bg-cover `}
    >
      <div className="md:basis-[40%] bg-fuchsia-500 basis-[70%]">
        <div className="relative h-[100%]">
          <Image
            src={imageUrl}
            fill
            alt="picture"
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:basis-[60%] bg-stone-300 md:p-10 flex flex-col   md:justify-between max-[640px]:h-[45%] max-[640px]:bg-lightRed p-5 max-[640px]:absolute bottom-0 ">
        <span
          className={`${playfair_display.className} max-[640px]:mb-5 text-center  border-y-2 md:py-2 md:px-5 border-black text-2xl font-semibold md:text-4xl`}
        >
          {title}
        </span>
        <p
          className={`${poppins.className}  md:w-[70%] mx-auto md:text-lg text-sm `}
        >
          {desc}
        </p>
        <button
          className={`${poppins.className} max-[640px]:w-[90%] border-2 md:py-2 md:px-5 text-black border-black py-1 max-[640px]:absolute bottom-5`}
        >
          <span>Discover more</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className=" ml-4"
          />
        </button>
      </div>
    </div>
  );
}

export default DrinkCard;
