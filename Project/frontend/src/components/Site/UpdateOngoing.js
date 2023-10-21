
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function UpdateOngoing() {
  const navigate = useNavigate()
  const data = useLocation().state.data
  const[location ,setLocation] = useState(data.location)
  const[status , setStatus] = useState(data.siteState)
  const[siteId , setSiteId] = useState(data.siteId)
  
  const submitdetails =(e)=>{
    e.preventDefault()

    axios.put('http://localhost:5000/site/'+data._id,{
      location : location,
      siteState : status,
      siteId : siteId
    }).then((response)=>{

      console.log(response)
      Swal.fire({
        icon: 'success',
        title:'Updated!',
        text:'Update site Details.'
      })
      navigate("/admin/Site/ongoingSite")

    })
    
}


  return (      
<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>{
    
    submitdetails(e)
  }}>
  <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Site id
      </label>
      <input defaultValue={siteId} onChange={(e)=>{
        setSiteId(e.target.value)
      }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Location
      </label>
      <input defaultValue={location} onChange={(e)=>{
        setLocation(e.target.value)
      }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location"/>
    </div>
    
    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Status
      </label>
      <input defaultValue={status} onChange={(e)=>{
        setStatus(e.target.value)
      }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="Status"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Submit
      </button>
    </div>
  </form>
 
</div>

    )
  
  }






