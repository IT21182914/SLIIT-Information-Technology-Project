import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Route, Routes } from "react-router-dom";
function CusDashBoard() {

  const navigate=useNavigate()
  
  return (

    <div className='flex gap-3'>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" onClick={()=>{navigate('customerview')}} src="https://media.istockphoto.com/id/1413761479/photo/mature-couple-meeting-financial-advisor-for-investment.jpg?b=1&s=170667a&w=0&k=20&c=G8bZB3pEyqD117mom1IxmZ2R6jXW5W9ztc1Ba67SgHs=" alt="Sunset in the mountains" />
  <Link to ="customerview">
 <div class="px-6 py-4">
  
    <div class="font-bold text-xl mb-2">Customer Details</div>
    <p class="text-gray-700 text-base">
    <h1>Manage Customer Details </h1>
    </p>
   
  </div>
  </Link>
  <div class="px-6 pt-4 pb-2">
    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Customers</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Manager</span> */}
  </div>
</div>
<br /><br />

<Link to ="vieworder">
<div class="max-w-sm rounded overflow-hidden shadow-lg " 
// style={{width:"20%",margin:"auto auto",textAlign:"center"}}
 >
  <img class="w-full" onClick={()=>{navigate('vieworder')}} src="https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490__340.jpg" alt='Constructions' />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Order Details</div>
    <p class="text-gray-700 text-base">
      <h1>Manage Order Details </h1>
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Order</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Manager</span> */}
  </div>
</div>
</Link>

<br /><br />
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" onClick={()=>{navigate('/customerdashboard/feedbackdetails')}} src="https://cdn.pixabay.com/photo/2020/05/22/21/44/review-5207277__340.jpg" alt='Feedbacks'/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Customer Feedbacks</div>
    <p class="text-gray-700 text-base">
      <h1> ⭐⭐⭐⭐⭐ </h1>
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  
    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Customer ⭐</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Feedback </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details  </span> */}
  </div>
</div>
 

    </div>
)

}


export default CusDashBoard