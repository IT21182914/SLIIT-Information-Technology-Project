import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddVehicle() {

 

  const [vName, setvName] = useState("");
  const [RegNumber, setRegNumber] = useState("");
  const [vModel, setvModel] = useState("");
  const [chassisNumber, setchassisNumber] = useState("")
  const [value, setvalue] = useState("");
  const [purchaseDate , setpurchaseDate] = useState("");

  function sendData(e){
    e.preventDefault();

    const newVehicle={
      vName, 
      RegNumber, 
      vModel, 
      chassisNumber, 
      value, 
      purchaseDate
    }

    //add new vehicle

    axios.post(`http://localhost:5000/vehicle/add`,newVehicle).then((err)=>{
      alert("Vehicle Successfully Added ")
      // console.log(err);
  }).catch((err)=>{
      alert("Insert Fail");
      console.log(err);
  })

  }


  return (
<div>

<form onSubmit={sendData}>
    <div
  class="block w-[650px] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
   <p class="text-5xl text-gray-900 dark:text-white"><b>Vehicle Registration</b></p>
  <br/>
  
    
    <div class="relative mb-15" data-te-input-wrapper-init></div>
<div>
    <div class="mb-6">
  <label for="vehiclename-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Vehicle Name</label>
  <input type="text" onChange={(e)=>{
                    setvName(e.target.value);

                }} name='vName' id="vehiclename-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="BMW"/>
  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span> </p>
</div>
<div class="mb-6">
  <label for="vehiclenumber-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Vehicle Number</label>
  <input type="text" onChange={(e)=>{
                    setRegNumber(e.target.value);

                }} name='RegNumber' id="vehiclenumber-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="HQ-1234"/>
  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span> </p>
</div>

</div>

<div>
    <div class="mb-6">
  <label for="vehiclemodel-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Vehicle Model</label>
  <input type="text" onChange={(e)=>{
                    setvModel(e.target.value);

                }} name='vModel' id="vehiclemodel-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="i8"/>
  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span> </p>
</div>
<div class="mb-6">
  <label for="chassynumber-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Chassy Number</label>
  <input type="text" onChange={(e)=>{
                    setchassisNumber(e.target.value);

                }} name='chassisNumber' id="chassynumber-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="pqrs6723"/>
  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span> </p>
</div>

</div>

{/* Front end validation for vehicle value */}
<div>
    <div class="mb-6">
  <label for="amount-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Vehicle Amount</label>
  <input type="number"   onChange={(e) => {
    const numericValue = parseInt(e.target.value);
    if (!isNaN(numericValue)) {
      setvalue(numericValue);
    }
  }}name='value' id="vehicleamount-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="300000000"/>
  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span> </p>
</div>

</div>
<div>
    <div class="mb-6">
    <label
          htmlFor="purchasedate-success"
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Purchase Date
        </label>
        <DatePicker
  selected={purchaseDate}
  onChange={(date) => {
    setpurchaseDate(date);
  

        }} 
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


<button
              type="submit"
              class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Create Vehicle
              
            </button>
           
            <Link to={'transport'}>
            <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
      Cancel
      
    </button>
</Link>

 
  </div>
  </form>
  </div>

  

  )
}

export default AddVehicle