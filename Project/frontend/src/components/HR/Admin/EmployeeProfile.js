import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { adminContext } from '../../../user/adminContext';

export default function EmployeeProfile() {
    const navigate = useNavigate();
    const user = useLocation().state.user;
    const {setUser} = useContext(adminContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/employee/getOneEmp/${user._id}`).then((response) => {
            console.log(response.data);
            setUser(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    
    
    return (
        <div className="w-full overflow-hidden  overflow-y-auto mb-10" style={{ height: 450 }}>
   <h1 style={{ textAlign: "center", fontSize: 50 }}>Profile Details</h1>
   <br></br>
            <div class="my-10 flex w-full flex-col items-center overflow-hidden overflow-y-auto scale-125">
                <div class="flex flex-row gap-x-6 rounded-xl bg-slate-500 p-6">
                    <div class="flex flex-col gap-9">
                        <div class="">
                            <img class="h-20 w-20 rounded-full" src={user.image} alt="profile" />
                        </div>

                        <div class="mt-4 flex flex-col items-end gap-6">

                            
                            <button class="btn btn-outline bg-blue-950 text-white" onClick={() => { navigate('/admin/HR/salary', {state : {user : user}} ) }} >Salary</button>
                           

                            <button class="btn btn-outline bg-blue-950 text-white" onClick={() => { navigate('/admin/HR/UpdateEmployee' , {state : {user : user}}) }} >Update</button>
                        </div>
                    </div>
                    <div class="col-span-full col-start-3 flex flex-row items-center border-4 border-black rounded-xl bg-slate-700">
                        <div class="w-fit">
                            <table class="w-90 h-full text-left text-sm text-blue-100 dark:text-blue-100">
                                <thead class=" text-xs text-white dark:text-white">
                                    <tr>
                                        <th scope="col" class=" px-6 py-3 text-lg">EMP ID</th>
                                        <th scope="col" class="px-6 py-3 text-sm">{user.empId}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col" class=" px-6 py-3 text-lg">Full Name</th>
                                        <th scope="col" class="px-6 py-3 text-sm">{user.name}</th>
                                    </tr>
                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">Gender</th>
                                        <th scope="col" class="px-6 py-3 text-sm">{user.gender}</th>
                                    </tr>

                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">Phone No</th>
                                        <th scope="col" class="px-6 py-3 text-sm">{user.phone}</th>
                                    </tr>

                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">NIC</th>
                                        <th scope="col" class="px-6 py-3 text-sm">{user.nic}</th>
                                    </tr>

                                    <tr class="">
                                        <th scope="col" class=" px-6 py-3 text-lg">Hire Date</th>
                                        <th scope="col" class="px-6 py-3 text-sm">{user.hiredDate}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>



        </div>









    )
}
