import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateEquipments() {
  const eq = useLocation().state.data
  const navigate = useNavigate();

   const [equ, setEquipments] = useState({
    equipmentId: eq.equipmentId,
    imageLink: eq.imageLink,
    name: eq.name,
    value: eq.value,
    description: eq.description,
    qty: eq.qty,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEquipments((prevEquipment) => ({
      ...prevEquipment,
      [name]: value,
    }));
  }


  

  const [equipment,setEquipment] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/equipment/`).then((response)=>{
      setEquipment(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])



  function handleSubmit(event) {
    event.preventDefault();
    // onAddEquipment(equipment);

    axios.put(`http://localhost:5000/equipment/update/${eq._id}`,equ)
    .then(()=>{
      console.log("Data Inserted into database")
      navigate("/admin/Equipment")

    }).catch((err)=>{
      console.log(err);
    })
  }


  return (
    <div>

      

<form  onSubmit={handleSubmit} className=" w-[600px] ">
        
<div className="mb-4">
  <label htmlFor="equipmentId" className="block font-bold mb-2">
    Equipment ID
  </label>
  <input
            type="text"
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary  "
            id="equipmentId"
            name='equipmentId'
            defaultValue={eq.equipmentId}
            onChange={handleChange}
            required
            placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="imageLink" className="block font-bold mb-2">
        Image Link
    </label>
    <input
            type="text"
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="imageLink"
            name='imageLink'
            // value={equipment.map}
            defaultValue={eq.imageLink}
            onChange={handleChange}
          
            placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="name" className="block font-bold mb-2">
        Name
    </label>


    <input
        type="text"
        className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
        id="name"
        name='name'
        // value={equipment.name}
        defaultValue={eq.name}
        onChange={handleChange}
        required
        placeholder=" "
    /> 
</div>

<div className="mb-4">
    <label htmlFor="value" className="block font-bold mb-2">
        Value
    </label>


    <input
        type="number"
        className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
        id="value"
        name='value'
        // value={equipment.map}
        defaultValue={eq.value}
        onChange={handleChange}
        required
        placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="description" className="block font-bold mb-2">
        Description
    </label>

    <textarea
        className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
        id="description"
        name='description'
        // value={equipment.map}
        defaultValue={eq.description}
        onChange={handleChange}
        required
        placeholder=" "
    />
</div>

<div className="mb-4">
    <label htmlFor="qty" className="block font-bold mb-2">
        Quantity
    </label>

    <input
            type="number"
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="qty"
            name='qty'
            // value={equipment.map}
            defaultValue={eq.qty}
            onChange={handleChange}
            required
            placeholder=" "
    />
  </div>

  <div className="flex items-center justify-between">
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Update Equipment
    </button>
  </div>
</form>

      




    </div>
  );

  
}
