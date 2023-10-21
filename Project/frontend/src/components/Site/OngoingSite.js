import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddSite from './AddSite'
import UpdateOngoing from './UpdateOngoing'

function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Extract the year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  // Return the formatted string
  return `${year}-${month}-${day}`;
}

 function OngoingSite() {
  

  const navigate = useNavigate()
  const [sites,setSites]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:5000/site").then((response)=>{
      console.log(response.data)
      setSites(response.data)
    })
  },[])
  // if(sites.length == 0){
  //   axios.get("http://localhost:5000/sites").then((response)=>{
  //     console.log(response.data)
  //     if(response.data.length != 0){
  //       setSites(response.data)
  //     }
  //   })
  // }
  //function handleDelete(id) {
    // send DELETE request to API with the item ID
    // update the inventory state by removing the deleted item
  //}

  function handleUpdate(item) {
    // navigate to the update form for the selected item
    navigate(`/admin/Site/updateongoinsite` , {
      state : {
        data : item
      }
    });
  }

   return (
    <div className="overflow-x-auto">
      <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search packages"
                className="input input-bordered"
                onChange={(e)=>{
                  if(e.target.value == ""){
                    axios.get("http://localhost:5000/site").then((res)=>{
                        setSites(res.data)
                    }
                    )
                }else{
                    const temp = sites.filter((site)=>{
                        return site.siteId.includes(e.target.value)
                    })
                    setSites(temp)
                }
                }}
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
  <table className="table w-full">
    {/* head*/}
    <thead>
          <tr>
            <th className="px-4 py-2">Site ID</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>

     </thead>

      
      {/* Only for get idea */}
      <tbody>
            {
              sites.map((item,index)=>{
                return(
                  <tr>
                  <td className="border px-4 py-2">{item.siteId}</td>
                  <td className="border px-4 py-2">{item.location}</td>
                  <td className="border px-4 py-2">{formatDate(item.start)}</td>
                  <td className="border px-4 py-2">{formatDate(item.end)}</td>
                  <td className="border px-4 py-2">{item.siteState}</td>
                  <td className="border px-4 py-2">
  
                  <button
                      onClick={(e)=>{
                        console.log(item._id)
                        axios.delete(`http://localhost:5000/site/${item._id}`).then((response)=>{
                          console.log(response)
                          window.location.reload()
                        })
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                  >Delete</button>
                  
                  
                  <button
  
                  onClick={()=> handleUpdate(item)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
                  >Update</button> 
                  </td>
              </tr>
                )
              })
            }
            

      {/* body */}

              </tbody>
     </table>
     <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
             <Routes>
                
                 <Route path="updateongoinsite" element={<UpdateOngoing/>} />
                
             </Routes>
        </div>
 </div>
   )
  }
 export default OngoingSite

