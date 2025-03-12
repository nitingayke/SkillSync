import React from "react";
import NavBar from "../components/NavBar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

import founder1 from "../assets/Image-1.png";
import founder2 from "../assets/Image-1.png";
import founder3 from "../assets/Image-1.png";
import founder4 from "../assets/Image-1.png";

const founders = [
  { id: 1, img: founder1, name: "Nitin Gayke" },
  { id: 2, img: founder2, name: "Krunal Kurkure" },
  { id: 3, img: founder3, name: "Anil Sonawane" },
  { id: 4, img: founder4, name: "Hrishikesh Chaudhari" },
];

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent lg:bg-gray-100 w-full">
        <div className="flex flex-col lg:flex-row mb-10 w-full lg:w-2/3 lg:bg-white p-6 rounded-xl lg:shadow-md gap-10 lg:gap-2">
          {/* Contact Us Section */}
          <div className="w-full lg:w-1/2 lg:pr-6">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <div className="mb-3">
              <label htmlFor="full-name" className="block text-md mb-1">Full Name</label>
              <input
                type="text"
                id="full-name"
                className="w-full p-2 border rounded-md"
                placeholder="Your Full Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-md mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="block text-md mb-1">Location</label>
              <input
                type="text"
                id="location"
                className="w-full p-2 border rounded-md"
                placeholder="Your Location"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block text-md mb-1">Message</label>
              <input
                type="text"
                id="message"
                className="w-full p-2 border rounded-md"
                placeholder="Give some feedback"
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded-md hover:bg-blue-600">
              Send Message
            </button>
          </div>

          {/* Founders Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Founders of SkillSync</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {founders.map((founder) => (
                <div key={founder.id} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center hover:bg-blue-50 hover:border-blue-600 lg:border transition duration-300">
                  <img src={founder.img} alt={founder.name} className="lg:w-21 lg:h-21 h-50 lg:rounded rounded-full object-cover mb-3" />
                  <h6 className="lg:text-xs font-semibold mb-1 hover:bg-blue-200 px-3 py-1 rounded-full transition">{founder.name}</h6>
                  <div className="flex space-x-3">
                    <LinkedInIcon className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                    <CodeIcon className="text-blue-400 cursor-pointer hover:scale-110 transition" />
                    <GitHubIcon className="text-gray-800 cursor-pointer hover:scale-110 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
