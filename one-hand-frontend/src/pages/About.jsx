import React, { useState } from "react";
import { people } from "../utils/people";
import Card from "../components/Card";

export default function About() {

  const bgImage =
    "https://images.pexels.com/photos/7130490/pexels-photo-7130490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
 

  return  (
    <section className="hero mx-auto ">
      <div
        className=" w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#KnowUs</h4>
        <p>EMPOWER. INSPIRE. TRANSFORM.</p>
      </div>
      <div
        className="mb-12 bg-cover pb-2 pt-12"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="mb-10 flex flex-col items-center justify-center lg:flex-row">
          <div className="m-10 rounded-lg lg:ml-8 lg:mr-4 lg:w-1/2">
            <img
              src='./src/utils/img/home-banner.jpeg'
              loading="lazy"
              alt="grpPhoto"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="ml-1 flex flex-col items-center justify-center bg-cover lg:w-1/2">
            <h4 className="text-center text-4xl font-bold">Who We Are ?</h4>
            <p className="tracking-lg w-fit px-7 pt-4 text-justify leading-6 sm:px-16 sm:text-lg lg:px-12 lg:pr-16 ">
              Civil Service Society, NIT Agartala serves as a dynamic platform
              for impassioned students to rigorously examine, deliberate upon,
              and actively engage with current public Policy and governance
              issues. Encouraging critical thinking and fostering innovative
              ideation, we foster collaborative efforts among students. Our
              overarching goal is to empower students with the requisite
              knowledge, skills, and resources to effectuate meaningful change
              in the realm of public service. Through robust discourse and
              concerted action, we endeavor to cultivate future leaders
              dedicated to shaping a more informed, effective, and equitable
              governance landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-inter text-3xl font-semibold underline sm:text-5xl">
          Our Teams
        </h1>
        <div className="sm:w-2/3 bg-white pb-24 pt-8 sm:pb-32 sm:pt-16">
          <div >
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Executive Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-4 gap-y-4 sm:gap-y-16 md:grid-cols-3"
            >
              {people.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}