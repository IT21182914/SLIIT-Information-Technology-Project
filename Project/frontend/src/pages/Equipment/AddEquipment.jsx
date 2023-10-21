import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import AddEquipmentForms from '../../components/Equipment/AddEquipmentForm';

export default function AddEquipments() {
  return (
    <div className="w-[99%] flex flex-col items-center absolute h-full ">
                <div className="w-[100%] flex flex-row justify-center h-[200%] overflow-y-scroll">
            <Routes>
                
                {/* <Route path="#" element={<#/>} /> */}
                {/* // <Route path="accountPrivilege" element={<AccountPrivilege/>}/> */}
                <Route path='addEquipment' element={<AddEquipmentForms/>}/>

 

            </Routes>
        </div>

    </div>
  )
}
