import React from 'react'
import aboutBlack from "../assets/images/image-about-dark.jpg"
import aboutLight from "../assets/images/image-about-light.jpg"

const About = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-[30vw_40vw_30vw] lg:overflow-hidden">
        <article>
          <img src={aboutBlack} alt="" className="w-full" />
        </article>
        <article className="p-4 flex flex-col justify-center">
          <h2 className=" text-xl lg:text-lg uppercase font-bold tracking-[.4rem] pb-4">
            About our furniture
          </h2>
          <p className="text-primary-Grey-800 lg:text-sm">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <article>
          <img src={aboutLight} alt="" className="w-full" />
        </article>
      </section>
    </>
  );
}

export default About
