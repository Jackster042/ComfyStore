import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const list = [
  {
    id: 1,
    image: hero1,
  },
  {
    id: 2,
    image: hero2,
  },
  {
    id: 3,
    image: hero3,
  },
  {
    id: 4,
    image: hero4,
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <section className="h-[28rem] p-4 bg-neutral rounded-box mt-3 w-full">
      <Slider {...settings}>
        {list.map((item) => {
          const { id, image } = item;
          return (
            <article key={id} className="carousel-item rounded-box">
              <img
                src={image}
                alt="img"
                className="h-full w-full object-cover rounded-box"
              />
            </article>
          );
        })}
      </Slider>
    </section>
  );
}
