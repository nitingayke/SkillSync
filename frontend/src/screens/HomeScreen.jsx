import React from "react";
import NavBar from "../components/NavBar";
import backgroundImage from "../assets/homebanner.png";
import membercard1 from "../assets/membercard1.png";
import membercard2 from "../assets/membercard2.png";
import membercard3 from "../assets/membercard3.png";
import membercard4 from "../assets/membercard4.png";
import fullImage from "../assets/fullImage.png";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen py-10 justify-center">
        <div
          className="bg-white bg-opacity-80 p-4 sm:p-6 lg:pb-20 rounded-2xl shadow-lg text-center w-auto max-w-8xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "100% 100%",
            height: "max-content",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <h1 className="text-3xl sm:text-4xl text-white md:text-5xl mt-3 sm:mt-6 text-center font-bold mb-4 sm:mb-10 w-full sm:w-2/3 mx-auto">
            SkillSync - Make Team And Develop Something New
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 mb-4 sm:mb-6 mx-auto w-11/12 sm:w-2/3">
            Here We Help To Find Team Mates For Hackathons, Ideathons, and Group
            Projects
          </p>
          <button className="bg-white py-2 text-sm sm:text-lg px-6 rounded-full text-black hover:bg-blue-600 hover:text-white transition">
            Find Your Teammate
          </button>
        </div>

        <div className="relative lg:-top-10 border-1 dark:border-0 w-2/3 p-2 gap-3 mx-auto lg:flex hidden bg-white justify-between items-center rounded-lg">
          {/* First child div with two stacked rows of images */}
          <div className="flex flex-col w-1/2 gap-4">
            <div className="flex gap-3">
              <img
                className="w-full h-24 sm:h-20 object-cover rounded-lg"
                src={membercard1}
                alt="Image 1"
              />
              <img
                className="w-full h-24 sm:h-20 object-cover rounded-lg"
                src={membercard2}
                alt="Image 2"
              />
            </div>
            <div className="flex gap-3">
              <img
                className="w-full h-24 sm:h-20 object-cover rounded-lg"
                src={membercard3}
                alt="Image 3"
              />
              <img
                className="w-full h-24 sm:h-20 object-cover rounded-lg"
                src={membercard4}
                alt="Image 4"
              />
            </div>
          </div>

          {/* Second child div with full-width image */}
          <div className="w-2/7">
            <img
              className="w-full h-full sm:h-40"
              src={fullImage}
              alt="Full Image"
            />
          </div>
        </div>

        {/* mobile code  */}
        <div className="relative lg:-top-10 border-1 dark:border-0 w-11/12 sm:w-2/3 p-2 gap-3 mx-auto flex flex-col bg-white justify-between items-center rounded-lg">
  {/* Column layout for all images */}
  <div className="flex flex-col w-full  gap-4">
    <h2 className="justify-center items-center flex pt-5">Team Unity</h2>
    <img
      className="w-full h-full sm:h-40 object-cover rounded-lg"
      src={fullImage}
      alt="Full Image"
    />
    <img
      className="w-full h-full sm:h-20 object-cover rounded-lg"
      src={membercard1}
      alt="Image 1"
    />
    <img
      className="w-full h-full sm:h-20 object-cover rounded-lg"
      src={membercard2}
      alt="Image 2"
    />
    <img
      className="w-full h-full sm:h-20 object-cover rounded-lg"
      src={membercard3}
      alt="Image 3"
    />
    <img
      className="w-full h-full sm:h-20 object-cover rounded-lg"
      src={membercard4}
      alt="Image 4"
    />
  </div>
</div>


        
      </div>
    </>
  );
};

export default HomeScreen;
