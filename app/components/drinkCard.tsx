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
      className={`min-[652px]:flex md:flex-row  min-[652px]:h-[550px] h-[620px] rounded-lg overflow-hidden relative max-[652px]:bg-[image:var(--image-url)] max-[652px]:bg-cover `}
    >
      <div className="md:basis-[40%]  basis-[70%]">
        <div className="relative h-[100%]">
          <Image
            src={imageUrl}
            fill
            alt="picture"
            className="object-cover"
          />
        </div>
      </div>
      <div className="min-[652px]:basis-[60%] bg-stone-300 md:p-10 flex flex-col  min-[652px]:justify-between max-[652px]:h-[50%] max-[652px]:bg-lightRed p-5 max-[652px]:absolute bottom-0 ">
        <span
          className={`${playfair_display.className} max-[652px]:mb-3 text-center  border-y-2 min-[652px]:py-2 min-[652px]:px-5 border-black text-2xl font-semibold min-[652px]:text-4xl`}
        >
          {title}
        </span>
        <p
          className={`${poppins.className}  md:w-[70%] mx-auto md:text-lg text-sm `}
        >
          {desc}
        </p>
        <button
          className={`${poppins.className} max-[652px]:w-[90%] border-2 min-[652px]:py-2 min-[652px]:px-5 text-black border-black py-1 max-[652px]:absolute bottom-5`}
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
