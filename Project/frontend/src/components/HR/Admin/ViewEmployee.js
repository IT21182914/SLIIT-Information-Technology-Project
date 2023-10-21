import React, { useEffect, useState } from "react";
import ViewEmpCard from "./ViewEmpCard";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ViewEmployee() {

  const [employeeList, setEmployeList] = useState([])

  const [records, setRecord] = useState(employeeList);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/employee").then((res) => {
      setEmployeList(res.data)
      setRecord(res.data)
    })

  }, [])

  const Filter = (event) => {
    setRecord(employeeList.filter(f => f.name.toLowerCase().includes(event.target.value)))

  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: 50 }}> Employee Details </h1>
      <div style={{ width: "35%", textAlign: "center", margin: "auto auto" }} class="input-group mb-5 col-start-4 col-span-2">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required onChange={Filter} />
          </div>
          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      <div className="w-ful grid grid-cols-11 mb-4">
        

        <button onClick={() => { navigate('/admin/HR/AddEmployee') }} className="btn btn-active flex flex-row gap-2 bg-blue-900 hover:bg-blue-950 col-start-9 col-end-11 w-fit h-fit">
          <span> Add Employee</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </span>
        </button>
      </div>


      <div className="h-80 w-full overflow-hidden overflow-y-auto">
        {
          records.map((employee) => {
            return (
              <ViewEmpCard
                name={employee.name}
                userImage={employee.image}
                email={employee.email}
                empId={employee.empId}
                id={employee._id}
                user={employee}
              />
            )
          }
          )
        }
      </div>
    </div>
  );
}
