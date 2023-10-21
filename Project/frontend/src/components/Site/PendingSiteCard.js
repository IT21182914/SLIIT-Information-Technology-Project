import axios from "axios";
import React from "react";
import { Link,Route, Routes, useNavigate } from "react-router-dom";
import AddSite from "./AddSite";
import UpdateAddSite from "./UpdateAddSite";

export default function PendingSiteCard({order}) {
    const navigate = useNavigate()
    return(
        <div className="flex w-[800px] flex-col items-center">
        <div className="flex flex-row w-[100%] shadow-xl mt-1 bg-white h-[300px] p-[5px] items-center relative rounded-md mb-5">
            <div className="h-[300px] p-[5px] flex flex-col  items-right justify-between">
                <h1 className="font-bold text-[30px]">{order.type}</h1>
                <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Payment:</h1>
                    <p className="ml-[5px] text-[20px] max-w-[60%]">{"Rs."+order.payment.toFixed(2)}</p>
                </div>
                <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Description:</h1>
                    <p className="ml-[2px] text-[20px]">{order.description}</p>
                </div>
                <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Note:</h1>
                    <h1 className="ml-[5px] text-[20px]">Pending</h1>
                </div>
            </div> 
            <div className="absolute right-[-100px] p-[150px] h-[100%] flex flex-col justify-between">
            <a
                href={order.documentLink}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    View Document
                </a>
        <br />
     <Link to={'addSite'}
     state={{id : order._id}}>
     <button 
       className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
        Start Site
      </button>
     </Link>
     </div>
     <br/>
       <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
             <Routes>
                
                 <Route path="addSite" element={<AddSite/>} />
                 <Route path="updatenewsite" element={<UpdateAddSite/>}/>

             </Routes>
        </div>

            
           
        </div>
        </div>
    )
}