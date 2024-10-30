import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          About
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold ">
              Comfy Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to <b>Comfy</b>, your go-to destination for high-quality,
        stylish, and affordable furniture. Whether you're looking to revamp your
        living room, update your office space, or add a touch of elegance to
        your bedroom, we offer a wide range of furniture pieces to suit every
        style and budget. At <b>Comfy</b>, we believe that your home should
        reflect your personality and be a sanctuary of comfort. That’s why we
        carefully curate a collection of modern, classic, and contemporary
        designs that combine functionality with aesthetics. From cozy sofas and
        dining sets to ergonomic office chairs and luxurious beds, we have
        something for every room in your home. Our mission is simple: to provide
        our customers with beautifully designed, durable furniture at unbeatable
        prices. We work directly with manufacturers, cutting out the middlemen,
        so you can enjoy premium quality without the premium price tag.
      </p>
    </>
  );
};

export default About;
