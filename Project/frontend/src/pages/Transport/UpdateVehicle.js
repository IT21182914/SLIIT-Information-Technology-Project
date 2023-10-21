import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { Link, useLocation,useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function UpdateVehicle() {
  const vehicle = useLocation().state.data
  const navigate = useNavigate()

   const [veh, setVehicles] = useState({
    equipmentId: vehicle.equipmentId,
    imageLink: vehicle.imageLink,
    name: vehicle.name,
    value: vehicle.value,
    description: vehicle.description,
    qty: vehicle.qty,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setVehicles((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }));
  }


  

  const [vehicles,setVehicle] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/vehicle/`).then((response)=>{
      setVehicle(response.data)
      // navigate("/Transport")
    }).catch((err)=>{
      console.log(err)
    })
  },[])



  function handleSubmit(event) {
    event.preventDefault();
    // onAddEquipment(equipment);

    axios.put(`http://localhost:5000/vehicle/update/${vehicle._id}`,veh)
    .then(()=>{
      console.log("Data Inserted into database")
      navigate("/admin/Transport")

    }).catch((err)=>{
      console.log(err);
    })
  }


  return (
    <div>

      

<form  onSubmit={handleSubmit} className=" w-[600px] ">
        
<div className="mb-4">
  <label htmlFor="vName" className="block font-bold mb-2">
     Vehicle Name
  </label>
  <input
            type="text"
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary  "
            id="vName"
            name='vName'
            defaultValue={vehicle.vName}
            onChange={handleChange}
            required
            placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="vehicleNumber" className="block font-bold mb-2">
        Vehicle Number
    </label>
    <input
            type="text"
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="RegNumber"
            name='RegNumber'
            // value={equipment.map}
            defaultValue={vehicle.RegNumber}
            onChange={handleChange}
          
            placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="name" className="block font-bold mb-2">
        Vehicle Model 
    </label>


    <input
        type="text"
        className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
        id="vModel"
        name='vModel'
        // value={equipment.name}
        defaultValue={vehicle.vModel}
        onChange={handleChange}
        required
        placeholder=" "
    /> 
</div>

<div className="mb-4">
    <label htmlFor="chassisNumber" className="block font-bold mb-2">
        Chassis Number 
    </label>


    <input
        type="text"
        className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
        id="chassisNumber"
        name='chassisNumber'
        // value={equipment.map}
        defaultValue={vehicle.chassisNumber}
        onChange={handleChange}
        required
        placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="value" className="block font-bold mb-2">
        Vehicle Value 
    </label>

    <textarea
        className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
        id="value"
        name='value'
        // value={equipment.map}
        defaultValue={vehicle.value}
        onChange={handleChange}
        required
        placeholder=" "
    />
</div>

{/* <div className="mb-4">
    <label htmlFor="purchaseDate" className="block font-bold mb-2">
        Purchase Date
    </label>

    <input
            type="date"
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="purchaseDate"
            name='purchaseDate'
            defaultValue={vehicle.purchaseDate}
            onChange={handleChange}
            required
            placeholder=" "
    />
  </div> */}

  <div>
    <div class="mb-6">
    <label
          htmlFor="purchasedate-success"
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Purchase Date
        </label>
        <DatePicker
  // selected={purchaseDate}
  selected={new Date(vehicle.purchaseDate)}
          onChange={handleChange}

        // value="purchaseDate"
          type="date"
          name="purchaseDate"
          id="purchasedate-success"
          className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
          placeholderText="DD/MM/YYYY"
          dateFormat="dd/MM/yyyy"
        />
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium"></span>{' '}
        </p>
</div>

</div>




  <div className="flex items-center justify-between">

    <button
      type="submit" 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Update Vehicle
    </button>

  </div>
</form>

      




    </div>
  );

  
}
