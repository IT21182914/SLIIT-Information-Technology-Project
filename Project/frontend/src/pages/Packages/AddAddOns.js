import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAddOns = () => {
  const [packageName, setPackageName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/Package");
  };
  return (
    <div>
      <div>
              <div className="absolute bg-black h-screen w-50 bg-cover bg-blend-overlay bg-opacity-50" />
              <div className="m-auto max-w-7xl   bg-white  p-2 text-black">
                <div className="mx-32 border-b-2 border-gray-400 mt-4">
                  <div className="flex justify-start ">
                    {/* <div className="font-semibold text-2xl">Cook Dashboard</div> */}
                  </div>
                  <div className="flex space-x-2 mt-6 mb-2">
                    <div className="flex justify-start mx-10">
                      <div className="text-xl font-semibold ">
                        Enter add-ons details
                      </div>
                    </div>
                  </div>
                </div>

                {/* body of the card */}
                <div className="flex w-full py-2 border">
                  <div className="w-1/2 flex-col justify-center items-center">
                    {/* img */}
                    <img
                      className="h-40 w-40 object-cover m-[20%]"
                      alt="addons img"
                      src="https://images.unsplash.com/photo-1587061633437-187ac80e8e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <input type="file" className="file-input file-input-bordered file-input-sm w-[75%] max-w-xs ml-10" />
                  </div>
                  
                  <div className=" w-1/2 flex justify-start">
                    {/* form */}
                    <div>
                      <div className="w-full">
                        <div className="mt-0">Add-ons Name</div>
                        <input
                          defaultValue={packageName}
                          type="text"
                          placeholder=""
                          name="dishname"
                          id="dishname"
                          className="p-1 bg-gray-300 w-full text-black"
                          onChange={(e) => {
                            setPackageName(e.target.value);
                          }}
                        />
                        <div className="mt-4">Price</div>
                        <input
                          defaultValue={price}
                          type="number"
                          placeholder="LKR"
                          name="menu"
                          id="menu"
                          className="p-1 bg-gray-300 w-full text-black"
                          onChange={(e) => {
                            setPrice(parseFloat(e.target.value));
                          }}
                        />
                        <div className="mt-4">Description</div>
                        <input
                          defaultValue={description}
                          type="text"
                          placeholder=""
                          name="description"
                          id="description"
                          className="p-1 h-24 bg-gray-300 w-full text-black"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                      </div>
                      <div
                        className="bg-purple-500 text-white p-1 px-3 rounded-md text-sm mt-6"
                        onClick={(e) => {
                          console.log(
                            packageName,
                            price,
                            description,
                            duration,
                            cost
                          );
                          // axios
                          //   .post("http://localhost:5000/package", {
                          //     packageName: packageName,
                          //     price: price,
                          //     description: description,
                          //     duration: duration,
                          //     cost: cost,
                          //   })
                          //   .then((res) => {
                          //     console.log(res);
                          //     goBack();
                          //   });
                        }}
                      >
                        + Add new add-ons
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default AddAddOns;
