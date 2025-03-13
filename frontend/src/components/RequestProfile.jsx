import React from 'react'
import userImage from '../assets/userImage.png'
import ArrowLeft from '../assets/backicon.png';
import { Link, useNavigate } from 'react-router-dom';

const requests = [
  {
    id: 1,
    name: 'Krunal Arvind Kurkure',
    image: userImage,
  },
  {
    id: 2,
    name: 'Krunal Arvind Kurkure',
    image: userImage,
  },
  {
    id: 3,
    name: 'Krunal Arvind Kurkure',
    image: userImage,
  },
  {
    id: 4,
    name: 'Krunal Arvind Kurkure',
    image: userImage,
  },

];

const RequestProfile = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 mt-2 sm:mt-5">

        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <button onClick={() => navigate("/")}>
              <img src={ArrowLeft} alt="Back" className="w-6 h-6 sm:w-6 sm:h-6" />
            </button>
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold ml-3 sm:ml-4">Request Notification</h1>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow border border-black-900 ">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Phone Number Request</h2>

          <div className="space-y-4 sm:space-y-6">
            {requests.map((request) => (
              <div key={request.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={request.image}
                    alt={request.name}
                    className="w-12 h-12 sm:w-15 sm:h-15 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{request.name}</h3>
                    <button className="mt-1 px-3 sm:px-4 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-3">
                  <button className="flex-1 sm:flex-none px-4 sm:px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm sm:text-base">
                    Accept
                  </button>
                  <button className="flex-1 sm:flex-none px-4 sm:px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestProfile;
