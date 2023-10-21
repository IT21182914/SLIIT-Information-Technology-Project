import React from 'react'
import Swal from 'sweetalert2'

export default function RequestEquip() {

  const RequestEquipment =()=>{
    Swal.fire({
      icon: 'success',
      title:'Submited!',
      text:'Request Submited.'
    })
  }

  return (
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-6">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Location
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Start Date
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startdate" type="date"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        End Date
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enddate" type="date"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
      No of Equipment
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="equip" type="number" placeholder="No of Equipment"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={RequestEquipment}>
        Submit
      </button>
    </div>
  </form>
</div>
  )
}
