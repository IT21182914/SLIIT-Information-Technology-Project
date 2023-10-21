import React from 'react'
import { Button } from 'antd'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import RequestEquip from './requestEquip'


function EquipmentDetails() {

  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      {/* head*/}
      <thead>
            <tr>
              <th className="px-4 py-2">Site ID</th>
              <th className="px-4 py-2">Eqip ID</th>
              <th className="px-4 py-2">Equipment Name</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
            </tr>
  
       </thead>
        {/* body */}
        <tbody>
        </tbody>
    </table>
    <br />
     <div style={{textAlign:'center'}}> 
      <Link to={'requestEquipment'}>
      <button
       className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
        Request Equipment
      </button>
      <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
            <Routes>
                 
                 <Route path="requestEquipment" element={<RequestEquip/>} /> 

             </Routes>
        </div>
    </Link>
    </div>
    </div>

    
    
  )
}

export default EquipmentDetails
