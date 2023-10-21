import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import PackageOverview from "../../pages/Packages/PackageOverview";
import Modal from "./Model";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OverviewCard = ({ packageDetails }) => {
  console.log(packageDetails);

  const navigate = useNavigate();
  return (
    <div
      key={packageDetails._id}
      className=" relative flex flex-col overflow-hidden  border border-gray-200 h-full  w-full"
    >
      <div className="aspect-w-3 aspect-h-4 h-1/2 bg-gray-200">
        <img
          src={packageDetails.homeImage}
          alt={packageDetails.homeImage}
          className="h-full w-full object-cover object-center hover:opacity-75"
        />
      </div>
      <div className="flex  flex-col align-bottom space-y-2 p-4">
        <div className="flex justify-between">
          <div className="text-sm  cursor-pointer">
            <div className="flex">
              <div className="ml-3 justify-center text-start font-semibold">
                <div className="text-blue-500">{packageDetails.name}</div>
                {/* <div>{packageDetails.source}</div> */}
              </div>
            </div>
          </div>
          <div className="text-lg font-bold text-gray-900">
            {packageDetails.price} LKR
          </div>
        </div>
        {/* <div className="pt-2 flex justify-start">
           <div className="text-gray-500 mr-2">{packageDetails.avgRating}</div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  packageDetails.avgRating > rating
                    ? "text-yellow-400"
                    : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div> 
          <div className="text-gray-500 ml-2">({packageDetails.noOfRatings})</div>
        </div> */}

        <p className="text-sm text-left text-gray-500">
          {packageDetails.description}
        </p>

        <div className="border-b-2 py-3" />
        <div className="pt-2 flex justify-between">
        <button
          onClick={(e)=>{
            navigate('/placeorder' , {state: {data: packageDetails}})
          }} className="bg-green-500 p-1 px-2 rounded-md text-white cursor-pointer">
            Build now
          </button>

          <Modal />
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
