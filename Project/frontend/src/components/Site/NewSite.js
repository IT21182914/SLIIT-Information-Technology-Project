import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddSite from './AddSite'
import UpdateAddSite from './UpdateAddSite'
import Swal from 'sweetalert2'
import PendingSiteCard from './PendingSiteCard'

 function NewSite() {


  const navigate = useNavigate()
  const [sites,setSites]=useState([])
  // if(sites.length == 0){
  //   axios.get("http://localhost:5000/sites").then((response)=>{
  //     console.log(response.data)
  //     if(response.data.length != 0){
  //       setSites(response.data)
  //     }
  //   })
  // }
  useEffect(()=>{
    axios.get("http://localhost:5000/order/pending").then((response)=>{
      console.log(response.data)    
        setSites(response.data)      
    })
  },[sites])


  
  function handleDelete(id) {
    
  }

  function handleUpdate(id) {
    // navigate to the update form for the selected item
    // setUseNavigate(`/update/${id}`);
    
    
  }
   return (
    <div>
      {
        sites.map((site)=>{
          return <PendingSiteCard order={site}/>
        })
      }
      
     
 </div>
   )
  }
 export default NewSite

