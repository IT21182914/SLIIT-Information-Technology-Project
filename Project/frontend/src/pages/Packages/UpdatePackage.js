import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePackage = () => {
  const data = useLocation().state.data;
  console.log(data)
  const [packageName, setPackageName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);
  const [duration, setDuration] = useState(data.duration);
  const [cost, setCost] = useState(data.cost);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/Package");
  };
  return (
      <div>
              <div className="absolute bg-black h-screen w-50 bg-cover bg-blend-overlay bg-opacity-50" />
              <div className="m-auto max-w-7xl w-6/6  bg-white  p-2 text-black">
                <div className="mx-32 border-b-2 border-gray-400 mt-4">
                  <div className="flex justify-start ">
                    {/* <div className="font-semibold text-2xl">Cook Dashboard</div> */}
                  </div>
                  <div className="flex space-x-2 mt-6 mb-2">
                    <div className="flex justify-start mx-10">
                      <div className="text-xl font-semibold ">
                        Update package details
                      </div>
                    </div>
                  </div>
                </div>

                {/* body of the card */}
                <div className="flex w-full py-2 border">
                  <div className="w-1/2 flex justify-center items-center">
                    {/* img */}
                    <img
                      className="h-40 w-40 object-cover"
                      alt="Dish img"
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                  </div>
                  <div className=" w-1/2 flex justify-start">
                    {/* form */}
                    <div>
                      <div className="w-full">
                        <div className="mt-0">Package Name</div>
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
                        <div className="mt-4">Duration</div>
                        <input
                          defaultValue={duration}
                          type="textarea"
                          placeholder=""
                          name="duration"
                          id="duration"
                          className="p-1 bg-gray-300 w-full text-black"
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        />
                        <div className="mt-4">Cost</div>
                        <input
                          defaultValue={cost}
                          type="number"
                          placeholder="LKR"
                          name="cost"
                          id="cost"
                          className="p-1 bg-gray-300 w-full text-black"
                          onChange={(e) => {
                            setCost(parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      {/* <div className="flex space-x-1 mt-4">
                        <input
                          type="checkbox"
                          id="check_allergy"
                          name="check_allergy"
                        />
                        <div>Allergy Disclaimer</div>
                      </div>
                      <div className="flex space-x-1">
                        <input
                          type="checkbox"
                          id="check_special"
                          name="check_special"
                        />
                        <div>Moms Special Dish</div>
                      </div> */}
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
                          axios.put('http://localhost:5000/Packages/updatePackage',{
                            id : data._id,
                            name :packageName,
          price : price,
          description : description,
          duration : duration,
          homeImage : null,
          modelLink : null,
          cost : cost,
          planImage :null,
          isApproved : true,
                          }).then((response)=>{
                            goBack()
                          })
                          
                        }}
                      >
                        Update package
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  );
};

export default UpdatePackage;
