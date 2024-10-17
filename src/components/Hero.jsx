import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

// const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* LEFT SIDE */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Shopping with us is easy and hassle-free. Our user-friendly website
          allows you to browse our extensive collection, place orders, and
          arrange delivery—all from the comfort of your home.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary capitalize">
            our products
          </Link>
        </div>
      </div>
      {/* RIGHT SIDE */}
      {/* <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div> */}
      <div className="hidden  h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={hero1} className="w-full rounded-box" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={hero2} className="w-full rounded-box" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={hero3} className="w-full rounded-box" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={hero4} className="w-full rounded-box" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle opacity-25 hover:opacity-50"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
