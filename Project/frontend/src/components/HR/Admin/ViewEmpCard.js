import axios from "axios";
import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function ViewEmpCard(props) {
  
  const navigate = useNavigate();
  return (
    <div className="w-ful flex flex-col items-center mb-6">
      <div className="w-10/12 card card-side flex flex-row items-center bg-base-100 shadow-2xl">
        <figure className="mx-8 h-32 w-32 rounded-full">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src={props.userImage}
            alt="UserImage"
          />
        </figure>
        <div className="card-body flex flex-row place-content-around">
          <div className="flex flex-col gap-1">
            <h2 className="card-title">{props.name}</h2>
            <p>{props.empId}</p>
            <p>{props.email}</p>
          </div>

          <div className="card-actions items-end flex flex-col w-[100%]">
          
            <button onClick={()=>{
              //navigate to viewProfile withe user.props in state user
              navigate('/admin/HR/EmployeeProfile',{state:{user:props.user}})
              

            }}className="btn btn-primary normal-case">View Profile</button>
           
            <button type="button" class=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center ml-3 mt-0.4"
            onClick={()=>{
              axios.delete(`http://localhost:5000/employee/${props.id}`).then((response)=>{
                console.log(response.data)
                window.location.reload();
              })
            }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
