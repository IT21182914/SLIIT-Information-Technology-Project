import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import PackageOverview from "../../pages/Packages/PackageOverview";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ItemCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      key={product.id}
      className=" relative flex flex-col overflow-hidden  border border-gray-200 h-full"
    >
      <div className="aspect-w-3 aspect-h-4 h-1/2 bg-gray-200">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center hover:opacity-75"
        />
      </div>
      <div className="flex  flex-col align-bottom space-y-2 p-4">
        <div>
          <img
            src={product.homeImage}
            className="h-56 w-full object-cover hover:opacity-75"
          />
        </div>
        <div className="flex justify-between">
          <div className="text-sm  cursor-pointer">
            <div className="flex">
              <div className="ml-3 justify-center text-start font-semibold">
                <div className="text-blue-500">{product.name}</div>
              </div>
            </div>
          </div>
          <div className="text-lg font-bold text-gray-900">
            {product.price} LKR
          </div>
        </div>
        <div className="pt-2 flex justify-start">
          <div className="text-gray-500 mr-2">{product.avgRating}</div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.avgRating > rating
                    ? "text-yellow-400"
                    : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="text-gray-500 ml-2">({product.noOfRatings})</div>
        </div>

        <p className="text-sm text-left text-gray-500">{product.description}</p>

        <div className="border-b-2 py-3" />
        <div className="pt-2 flex justify-between">
          <Link to={`packageoverview/${product._id}`}>
            <button className="text-sm text-blue-400 cursor-pointer">
              View more
            </button>
          </Link>

          <button
          onClick={(e)=>{
            navigate('/placeorder' , {state: {data: product}})
          }} className="bg-green-500 p-1 px-2 rounded-md text-white cursor-pointer">
            Build now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
