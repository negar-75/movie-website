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
  console.log(image);
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

  return (
    <>
      <div
        className={classNames(
          "w-full grid md:grid-cols-2 grid-cols-1 grid-rows-2 p-3 gap-2"
        )}
        ref={carteRef}
      >
        <div className="translate-x-[-70%] [transition:opacity_0.5s,transform_1s] opacity-0 ">
          <div className="h-full relative lg:rounded-lg overflow-hidden ">
            <Image
              src={image}
              fill
              alt="photo"
              className="object-cover"
            />
          </div>
        </div>
        <div className="translate-x-[70%] opacity-0 [transition:opacity_0.5s,transform_1s] text-center ">
          <div className=" text-white border-2 p-3 space-y-3">
            <span>{title}</span>
            <p className="whitespace-pre-wrap">{desc}</p>
            <button className="border-2 w-[70%] py-1 uppercase">buy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCard;
