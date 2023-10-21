import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import Paysheet from './Paysheet'


export default function HRM() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: 50 }}> HR Management</h1>
      <br></br>
      <div className='flex gap-3 flex-row place-content-center'>
        <Link to="viewemployee">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg" alt="employee" />
            <div class="px-6 py-4">

              <div class="font-bold text-xl mb-2">Employee Details</div>
              <p class="text-gray-700 text-base">
                <h1>Manage Employee Details </h1>
              </p>

            </div>
            <div class="px-6 pt-4 ">
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Customers</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details</span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Manager</span> */}
            </div>
          </div>
        </Link>

        <br /><br />

        <Link to="viewattendance">
          <div class="max-w-sm rounded overflow-hidden shadow-lg "
          // style={{width:"20%",margin:"auto auto",textAlign:"center"}}
          >
            <img class="w-full" src="https://cdn.pixabay.com/photo/2021/04/15/13/19/meeting-6181119__340.jpg" alt='availability' />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Employee Availability</div>
              <p class="text-gray-700 text-base">
                <h1>Markes attendence of employee</h1>
              </p>
            </div>
            <div class="px-6 pt-4 ">
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Order</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Manager</span> */}
            </div>
          </div>
        </Link>
        {/* <Link to="calculateSalary">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://cdn.pixabay.com/photo/2012/02/22/20/15/bank-15647_960_720.jpg" alt='salary' />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Calculate Salary</div>
            <p class="text-gray-700 text-base">
              <h1> Calculate Employee Salary </h1>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2"> */}

            {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Customer ⭐</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Feedback </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details  </span> */}
          {/* </div>
        </div>
        </Link> */}

      </div>
  
    </div>
  )
}
