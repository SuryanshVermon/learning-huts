import React, { useState } from "react";
import { people } from "../utils/people";
import Card from "../components/Card";
import grpImage from "../utils/img/about.jpg"

export default function About() {

  const bgImage =
    "https://images.pexels.com/photos/7130490/pexels-photo-7130490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
 

  return  (
    <section className="hero mx-auto ">
      <div
        className="flex flex-col items-center w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#LearningHuts</h4>
        <p className="w-full">MISSION. VALUES. VISION.</p>
      </div>
      <div
        className="mb-12 bg-cover pb-2 pt-12"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="mb-10 flex flex-col items-center justify-center lg:flex-row">
          <div className="m-10 rounded-lg lg:ml-8 lg:mr-4 lg:w-1/2">
            <img
              src={grpImage}
              loading="lazy"
              alt="grpPhoto"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="ml-1 flex flex-col items-center justify-center bg-cover lg:w-1/2">
            <h4 className="text-center text-4xl font-bold">Who We Are ?</h4>
            <p className="tracking-lg w-fit px-7 pt-4 text-justify leading-6 sm:px-16 sm:text-lg lg:px-12 lg:pr-16 ">
            At Learning Huts Foundation, we believe that education is the most powerful tool for transforming lives and communities. Our mission is to empower underprivileged children and youth by providing access to quality education, mentorship, and life skills training.

Founded on the belief that every child deserves the opportunity to reach their full potential, Learning Huts works tirelessly to bridge the education gap for those in need. We collaborate with local communities, educators, and volunteers to create a supportive and nurturing environment where learning thrives.
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