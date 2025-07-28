import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import previous from "../assets/images/icon-angle-left.svg";
import next from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";

const ShowCase = () => {
  const [index, setIndex] = useState(0);

  // handlers
  const handlePrevBtn = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(assets.length - 1);
    }
  };
  const handleNextBtn = () => {
    if (index < assets.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <>
      <section className="grid lg:grid-cols-[65vw_35vw] lg:overflow-hidden ">
        <article key={assets[index].id} className=" relative">
          <picture>
            <source
              className="bg-contain lg:overflow-hidden"
              media="(min-width: 768px)"
              srcSet={assets[index].desktop}
            />
            <img
              className="w-full h-full"
              src={assets[index].mobile}
              alt={assets[index].title}
            />
          </picture>
        </article>

        <article className="p-4 lg:p-8 relative">
          <h1 className="py-4 lg:py-8 text-2xl lg:text-3xl font-bold capitalize">
            {assets[index].title}
          </h1>
          <p className=" text-primary-Grey-800">{assets[index].desc}</p>
          <button className="flex gap-4 items-center mt-4 lg:mt-8 hover:opacity-50 tracking-[.5rem] font-bold text-xs">
            SHOP NOW <img src={arrow} />
          </button>
          <ul className=" absolute -top-12 right-0 lg:top-101 lg:left-0 h-[3rem] w-[5rem] lg:w-[5vw] flex items-center justify-around">
            <li className="bg-black w-full h-full hover:bg-neutral-600">
              <button onClick={handlePrevBtn} className="w-full h-full">
                <img src={previous} alt="" className="mx-auto" />
              </button>
            </li>
            <li className="bg-black w-full h-full hover:bg-neutral-600">
              <button onClick={handleNextBtn} className="w-full h-full">
                <img src={next} alt="" className="mx-auto" />
              </button>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default ShowCase;

const assets = [
  {
    id: uuidv4(),
    title: "Discover innovative ways to decorate",
    desktop: "./images/desktop-image-hero-1.jpg",
    mobile: "./images/mobile-image-hero-1.jpg",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: uuidv4(),
    title: "  We are available all across the globe",
    desktop: "./images/desktop-image-hero-2.jpg",
    mobile: "./images/mobile-image-hero-2.jpg",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: uuidv4(),
    title: "  Manufactured with the best materials",
    desktop: "./images/desktop-image-hero-3.jpg",
    mobile: "./images/mobile-image-hero-3.jpg",
    desc: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of   experience in this industry, we understand what customers want for their home and office.",
  },
];
