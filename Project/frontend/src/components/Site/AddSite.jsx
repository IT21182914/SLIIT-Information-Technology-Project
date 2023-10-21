
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function AddSite() {
  const [location, setLocation] = useState('')
  const [siteId  , setSiteId] = useState('')
  const [note , setNote] = useState('')
const id = useLocation().state.id
const navigate = useNavigate()
console.log(id)
  const submitdetails =()=>{
    Swal.fire({
      icon: 'success',
      title:'Submited!',
      text:'Added New Details.'
    })
}

  return (      
<div class="w-full max-w-xs">
  
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Site ID
      </label>
      <input defaultValue={siteId}
      onChange={(e)=>{
        setSiteId (e.target.value)
      }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="siteid" type="text" placeholder="site-id"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Location
      </label>
      <input defaultValue={location}
      onChange={(e)=>{
        setLocation(e.target.value)
      }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Location" type="text" placeholder="Location"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Note
      </label>
      <input defaultValue={note}
      onChange={(e)=>{
        setNote (e.target.value)
      }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="note" type="text" placeholder="Note"/>
    </div>
    <div class="flex items-center justify-between">
      <button onClick={
        
        ()=>{
          console.log(
            {
              siteId:siteId,
              location:location,
              note:note,
              id : id
            }
          )
          axios.post('http://localhost:5000/order/start',{
            siteId:siteId,
            location:location,
            note:note,
            id : id
          }).then((res)=>{
            console.log(res.data)
            navigate("/admin/Site/ongoingSite")
          })
        }
      } class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Submit
      </button>
    </div>
  
</div>

    )
  
  }






