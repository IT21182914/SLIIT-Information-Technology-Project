import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import UpdatePackage from "../../pages/Packages/UpdatePackage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const dish = {
  packageName: "Baked Salmon",
  price: "Rs. 2000",
  duration: "2 Days",
  description: "This is a description",
  imageSrc: "https://source.unsplash.com/featured/?{food}",
  imageAlt: "Salmon",
};

const PackageCard = ({ isButtonVisible, refresher, item }) => {
  
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      
    });
  };

  return (
    <div>
      {dish && (
        <div className="border p-3 my-3 ">
          <div className="flex justify-between">
            <div className="text-sm">
              <div className="flex">
                {item.homeImage && (
                  <img src={item.homeImage} className="h-32 w-32" />
                )}
                <div className="ml-3 justify-center items-start space-y-1 text-start">
                  <div className="flex space-x-2">
                    <div className="font-semibold"> Name : </div>
                    <div>{item.name}</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-semibold"> Price : </div>
                    <div>{item.price + " LKR"} </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-semibold whitespace-nowrap">
                      {" "}
                      Duration :{" "}
                    </div>
                    {item.duration ? (
                      <div>{item.duration}</div>
                    ) : (
                      <div>{dish.duration}</div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-semibold"> Cost : </div>
                    <div>{item.cost + " LKR"} </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-semibold whitespace-nowrap">
                      {" "}
                      Description :{" "}
                    </div>
                    <div>{item.description}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center text-lg font-bold text-gray-900">
              <div className="flex items-center"></div>
            </div>
          </div>

          {isButtonVisible && (
            <div className="flex space-x-2 justify-end text-white mt-4">
              <Link to={"updatepackage"} state={{ data: item }}>
                <button className="bg-yellow-400 p-1 px-3 rounded-md flex items-center space-x-1">
                  <BiEdit size={20} /> <div>Edit</div>
                </button>
              </Link>
              <button
                className="bg-red-500 p-1 px-3 rounded-md"
                onClick={(e) => {
                  axios
                    .delete(
                      `http://localhost:5000/packages/deletePackage?id=${item._id}`
                    )
                    .then(() => {
                      alert("Package Deleted Successfully");
                      // refresher([]);
                      //toast added
                                         
                     
                      
                    })
                    .catch((err) => {
                      alert(err);
                    });
                    window.location.reload();
                   
                  
                }}
              >
                <RiDeleteBinLine size={20} />
                
              </button>
            </div>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PackageCard;
