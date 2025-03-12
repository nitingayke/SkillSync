import React from "react";
import NavBar from "../components/NavBar";
import banner from "../assets/aboutbanner.png";
import anotherbanner from "../assets/aboutsmbanner.png";
import Founders from "../components/Founders";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="lg:hidden relative flex w-full mt-6 justify-center">
        {/* Wrapper to center everything */}
        <div className="relative w-full m-3 max-w-4xl rounded-lg overflow-hidden">
          <img
            src={anotherbanner}
            alt="About Banner"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute  inset-0 -top-10 flex flex-col items-center justify-center text-white bg-opacity-50">
            <h1 className="text-2xl text-center font-bold mb-2">About Us</h1>
            <p className="text-xs text-center px-4">
            We Developed A SkillSync Platform For 
            Finding Team Mate For Project Development.
            </p>

          </div>

        </div>
        
      </div>

      {/* Banner section with text overlay */}
      <div className="relative hidden sm:flex  w-full mt-6 justify-center">
        {/* Wrapper to center everything */}
        <div className="relative w-full max-w-4xl rounded-lg overflow-hidden">
          <img
            src={banner}
            alt="About Banner"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute  inset-0 -top-20 flex flex-col items-center justify-center text-white bg-opacity-50">
            <h1 className="text-3xl font-bold mb-2">About Us</h1>
            <p className="text-1xl text-center px-4">
            We Developed A SkillSync Platform For <br />
            Finding Team Mate For Project Development.
            </p>
            <button className="bg-white w-32 h-7 mt-6 text-xs sm:text-sm rounded-full text-black hover:bg-blue-600 hover:text-white transition">
              Create Profile
            </button>
          </div>
        </div>
      </div>

      {/* Section below the banner */}
      <div className="lg:justify-between lg:flex-row flex flex-col gap-6 px-20">
      <button className="w-35 h-10 mt-0 sm:text-center items-center justify-center m-auto bg-blue-200 text-xs sm:text-sm rounded-full text-black hover:bg-blue-600 hover:text-white transition lg:hidden">
              Create Profile
      </button>
        <h2 className="text-lg text-center font-semibold">Our Mission</h2>
        <p className="lg:text-right text-center">
          Unity of our team came together as we are all developers focusing <br /> on
          solving real-world problems.
        </p>
      </div>
      <Founders />
    </>
  );
};

export default About;
