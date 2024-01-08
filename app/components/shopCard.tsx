"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";

type ShopCardProps = {
  title: string;
  desc: string;
  image: string;
};

function ShopCard({ title, desc, image }: ShopCardProps) {
  const carteRef = useRef<HTMLDivElement>(null);
  let observer: IntersectionObserver;
  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio <= 0) return;
          // entry.target.classList.add("translate-x-0", "opacity-100");
          for (const child of entry.target.children) {
            child.classList.remove(
              "translate-x-[70%]",
              "opacity-0",
              "translate-x-[-70%]"
            );
            child.classList.add("translate-x-0", "opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (carteRef.current) {
      observer.observe(carteRef.current);
    }

    return () => {
      if (carteRef.current) {
        observer.unobserve(carteRef.current);
      }
    };
  }, [carteRef]);

  const makeSpaceBetweenNumberAndWord = (title: string) => {
    console.log(title);
    const splittedWord = title.slice(0, 7) + " " + title.slice(7, 8);
    console.log(splittedWord);
    return splittedWord;
  };

  return (
    <>
      <div
        className={classNames(
          "w-full grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 p-3 gap-3  basis-96 md:px-8"
        )}
        ref={carteRef}
      >
        <div className="translate-x-[-70%] [transition:opacity_3s,transform_1s] opacity-0   ">
          <div className="h-full relative md:rounded-lg overflow-hidden ">
            <Image
              src={image}
              fill
              alt="photo"
              className="object-cover"
            />
          </div>
        </div>
        <div className="translate-x-[70%] opacity-0 [transition:opacity_3s,transform_1s] text-center  ">
          <div className=" text-white border-2 md:p-5 flex flex-col justify-between items-center h-full md:rounded-lg p-3">
            <span className="md:text-4xl tracking-widest text-2xl ">
              {makeSpaceBetweenNumberAndWord(title)}
            </span>
            <p className="whitespace-pre-wrap tracking-wider text-xl mb-3 ">
              {desc}
            </p>
            <button className="border-2 w-[70%] md:py-1 uppercase text-xl">
              buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCard;
