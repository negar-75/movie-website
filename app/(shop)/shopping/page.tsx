import ShopCard from "@/app/components/shopCard";
import React from "react";

async function getData() {
  const res = await import("../../api/products/route");
  return await (await res.GET())?.json();
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
    <div className="space-y-5">
      {dataArr.map((product) => (
        <ShopCard
          key={product.id}
          title={product.title}
          desc={product.desc}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Page;
