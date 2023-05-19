"use client";
import DrinkCard from "@/app/components/drinkCard";
import { Fade } from "react-slideshow-image";
import { useEffect, useState } from "react";
import Title from "@/app/components/title";

const buttonStyle = {
  display: "none",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#fff"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#fff"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

function Drinks() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className=" px-5 ">
      <Title title="Drinks" />

      <Fade
        {...properties}
        duration={2500}
      >
        <DrinkCard
          imageUrl="https://source.unsplash.com/akwA-GPF710"
          title="Smoothie"
          desc="Thick, creamy beverages usually blended from puréed fruits, vegetables, juices, yogurt, nuts, seeds, and/or dairy or nondairy milk. The most basic smoothie starts with two essential ingredients — a base and a liquid. From there, you can combine ingredients to your liking"
        />

        <DrinkCard
          imageUrl="https://source.unsplash.com/gtDYwUIr9Vg"
          title="Lemonade"
          desc="A sweetened beverage made from lemons, sugar, and water. It is popular in the United States during the spring and summer, when it is generally served chilled with ice. In some countries, the word lemonade is also used to describe any clear carbonated drink; in others, it means any fruit-flavored soda."
        />

        <DrinkCard
          imageUrl="https://source.unsplash.com/sSnCZlEWN5E"
          title="Iced Tea"
          desc="A form of cold tea. It may or may not be sweetened and is also a popular packaged drink. It can be mixed with flavored syrup with multiple common flavors including lemon, raspberry, lime, passion fruit, peach, orange, strawberry, and cherry."
        />
      </Fade>
    </div>
  );
}

export default Drinks;
