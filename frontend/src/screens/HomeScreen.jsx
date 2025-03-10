import React from "react";
import NavBar from "../components/NavBar";
import backgroundImage from '../assets/homebanner.png';

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex my-10 justify-center">
        <div
          className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg text-center w-11/12 max-w-8xl h-100 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%" }}
        >
          <h1 className="text-white text-3xl md:text-5xl mt-6 text-center font-bold mb-10 md:w-2/3 mx-auto">SkillSync - Make Team And Develop Something New</h1>
          <p className="text-base text-zinc-300 mb-6 mx-auto">
            Here We Helps To Find Team Mate For Hackathon, Ideathons, and For Group Projects
          </p>
          <button className="bg-white py-2 text-1xl px-6 rounded-full  text-black hover:bg-blue-600 hover:text-white transition">
            Find Your Teammate
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
