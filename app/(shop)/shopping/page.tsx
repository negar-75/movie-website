import ShopCard from "@/app/components/shopCard";
import { CloudConfig } from "@cloudinary/url-gen";
import { NextResponse } from "next/server";
import React from "react";

async function getData() {
  try {
    const res = await import("../../api/products/route");
    const response = (await res.GET()) as NextResponse;
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

type Product = {
  id: string;
  desc: string;
  title: string;
  image: string;
};

async function Page() {
  const data = await getData();
  let dataArr: Product[] = [];

  for (const key of Object.keys(data)) {
    dataArr.push({
      id: key,
      desc: data[key].desc,
      title: data[key].title,
      image: data[key].image,
    });
  }

  return (
    <div className="space-y-5  flex flex-col">
      {dataArr.map((product) => {
       
        return (
          <ShopCard
            key={product.id}
            title={product.title}
            desc={product.desc}
            image={product.image}
          />
        );
      })}
    </div>
  );
}

export default Page;
