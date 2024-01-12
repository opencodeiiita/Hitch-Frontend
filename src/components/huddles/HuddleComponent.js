import React from "react";
import { IoChevronDown, IoApps } from "react-icons/io5";
import {
  FaMicrophone,
  FaRegCommentDots,
  FaRegWindowMaximize,
  FaRegSmile,
  FaRegBell,
  FaCog,
} from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";

const HuddleComponent = ({ setShowModal }) => {
  const profiles = [
    {
      id: 1,
      name: "User 1",
      avatar: "dhoni.jpeg",
    },
    {
      id: 2,
      name: "User 2",
      avatar: "dhoni.jpeg",
    },
    {
      id: 3,
      name: "User 3",
      avatar: "dhoni.jpeg",
    },
  ];
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 p-4" // Added padding here
      aria-hidden="true"
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4"> {/* Added padding */}
        <div className="bg-white shadow-md rounded-lg max-w-2xl mx-auto w-full p-4"> {/* Added padding */}
          <div className="flex justify-between items-center mb-4 p-2"> {/* Added padding */}
            <div className="flex-grow flex items-center p-2"> {/* Added padding */}
              <h1 className="text-xl font-semibold mr-2">Add a topic</h1>
              <button className="flex items-center text-gray-500 text-sm">
                3 people in the huddle
                <IoChevronDown className="ml-1" />
              </button>
            </div>
            <button className="flex items-center px-3 py-2 rounded-md transition-colors hover:bg-gray-100">
              <IoApps className="w-5 h-5 mr-2" />
              <span>View</span>
            </button>
          </div>
          <div className="flex justify-around items-center mb-4 p-2"> {/* Added padding */}
            {profiles.map((profile) => (
              <img
                key={profile.id}
                src={profile.avatar}
                alt={profile.name}
                className="rounded h-24 w-24 border-2 border-gray-300 p-1" // Added padding to images
              />
            ))}
          </div>
          <div className="flex justify-center items-center space-x-4 p-2"> {/* Added padding */}
            {/* Buttons with padding */}
            <button className="p-3 rounded-md bg-gray-100 hover:bg-gray-200"> {/* Increased padding */}
              <FaMicrophone />
            </button>
            <button className="p-3 rounded-md bg-gray-100 hover:bg-gray-200">
              <FaRegCommentDots />
            </button>
            <button className="p-3 rounded-md bg-gray-100 hover:bg-gray-200">
              <FaRegWindowMaximize />
            </button>
            <button className="p-3 rounded-md bg-gray-100 hover:bg-gray-200">
              <FaRegSmile />
            </button>
            <button className="p-3 rounded-md bg-gray-100 hover:bg-gray-200">
              <FaRegBell />
            </button>
            <button className="p-3 rounded-md bg-gray-100 hover:bg-gray-200">
              <FaCog />
            </button>
            <button
              onClick={() => {
                console.log("Leave huddle");
                setShowModal(false);
              }}
              className="flex items-center bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md focus:outline-none" // Increased padding
            >
              <BsBoxArrowRight className="w-5 h-5 mr-2" />
              Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuddleComponent;
