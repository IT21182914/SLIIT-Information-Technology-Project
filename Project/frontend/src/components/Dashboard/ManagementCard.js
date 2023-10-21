import React from "react";

const ManagementCard = ({ icon, title, works }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 to-emerald-500 to-90% transition duration-300 ease-in-out hover:opacity-80">
      <img
        src={icon}
        alt="Management Part Icon"
        className="w-24 h-24 mx-auto rounded-full"
      />
      <h2 className="text-lg font-medium text-blue-950 text-center mt-4">
        {title}
      </h2>
      <ul className="mt-4 ml-20">
        

        {works.map((work, index) => (
          <li key={index} className="text-purple-700 text-sm flex ease-in hover:ml-4">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
            {work}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagementCard;
