import React from "react";
import NavBar from "../components/NavBar";
import banner from "../assets/aboutbanner.png";

const About = () => {
  return (
    <>
      <NavBar />

      {/* Banner section with text overlay */}
      <div className="relative w-full mt-10 flex justify-center"> 
        {/* Wrapper to center everything */}
        <div className="relative w-full max-w-4xl rounded-lg overflow-hidden">
          <img
            src={banner}
            alt="About Banner"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 -top-20 flex flex-col items-center justify-center text-white bg-opacity-50">
            <h1 className="text-3xl font-bold mb-2">Welcome to SkillSync</h1>
            <p className="text-1xl text-center px-4">
              Your go-to platform for upskilling and career growth.
            </p>
            <button className="bg-white w-32 h-7 mt-6 text-xs sm:text-sm rounded-full text-black hover:bg-blue-600 hover:text-white transition">
  Create Profile
</button>

          </div>
        </div>
      </div>

      {/* Section below the banner */}
      <div className="flex flex-row items-start justify-between gap-12 px-20">
        <h2 className="text-lg font-semibold">Our Mission</h2>
        <p className="text-sm max-w-lg">
          Unity of our team came together as we are all developers focusing on solving real-world problems.
        </p>
      </div>
    </>
  );
};

export default About;
