import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import AddEquipmentForms from '../../components/Equipment/AddEquipmentForm';
import EqLists from '../../components/Equipment/EqList';
import UpdateEquipments from '../../components/Equipment/UpdateEquipment';
import ViewEqCard from '../../components/Equipment/ViewEqCard';
import UserForm from '../../components/Template/UserForm';
import axios from 'axios';
import  { useEffect, useState } from 'react';
// import AccountPrivilege from "../../components/Accounts/AccountPrivilege";


export default function EqDashboards(props) {

    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        axios
          .get('http://localhost:5000/equipment/total-value') // Replace with your server endpoint
          .then((response) => {
            setTotalValue(response.data.totalValue);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

  return (
    
    <div className="w-[99%] flex flex-col items-center absolute h-full ">

        {/* <div className='position : absolute left-2'>
            <h1 className='font-bold' >Value of All Equipments: </h1>
        <textarea readOnly className="textarea textarea-warning h-1" value={{totalValue}}></textarea>
        </div> */}

        {/* <div className="w-[100%] flex flex-row justify-end h-[13%]" >
            <Link to={'addEquipment'}>
                <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                    <p>Add Equipment</p>
                </button>
            </Link>
        </div>
        <br/> */}

        <div className="w-[100%] flex flex-row justify-center h-[200%] overflow-y-scroll">
            <Routes>
                
                {/* <Route path="#" element={<#/>} /> */}
                {/* // <Route path="accountPrivilege" element={<AccountPrivilege/>}/> */}
                {<Route path="*" element={<EqLists/>} />}
                {<Route path='viewCard' element={<ViewEqCard/>}/>}
                {<Route path="update" element={<UpdateEquipments/>} />}
                {<Route path="addEquipment" element={<AddEquipmentForms/>} />}
 

            </Routes>
            {/* <UserForm/> */}
        </div>
    </div>
  );
}
