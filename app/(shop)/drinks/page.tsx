"use client";
import DrinkCard from "@/app/components/drinkCard";
import Title from "@/app/components/title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"









function Drinks() {
  let settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    autoplay:true
  };

  return (
    <div className=" px-10 ">
      <Title
        title="Drinks"
        home={true}
      />

        <Slider {...settings}>
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

        </Slider>
       
       

        
    
    </div>
  );
}

export default Drinks;
