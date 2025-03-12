import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

import founder1 from '../assets/Image-1.png';
import founder2 from '../assets/Image-1.png';
import founder3 from '../assets/Image-1.png';
import founder4 from '../assets/Image-1.png';

const founders = [
  { id: 1, img: founder1, name: 'Nitin Gayke' },
  { id: 2, img: founder2, name: 'Krunal Kurkure' },
  { id: 3, img: founder3, name: 'Anil Sonawane' },
  { id: 4, img: founder4, name: 'Hrishikesh Chaudhari' },
];

const Founders = () => {
  return (
    <div className="mx-15 grid grid-cols-1 pb-10 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {founders.map((founder) => (
        <div
          key={founder.id}
          className="flex flex-col hover:bg-blue-50 duration-300 transition items-center  border justify-center w-full max-w-xs lg:max-w-sm h-58 lg:h-58 bg-white rounded-2xl shadow-lg p-4"
        >
          <img
            src={founder.img}
            alt={founder.name}
            className="w-30 h-30 rounded-full object-cover mb-2"
          />
          <h6 className='my-2 font-semibold hover:border-blue-950 hover:bg-blue-200 px-2 rounded-full'>{founder.name}</h6>
          <div className="flex mt-2 space-x-4">
            <LinkedInIcon className="text-blue-600 cursor-pointer hover:-translate-y-1" />
            <CodeIcon className="text-blue-400 cursor-pointer hover:-translate-y-1" />
            <GitHubIcon className="text-gray-800 cursor-pointer hover:-translate-y-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founders;