import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function AddAccount(props){
    
    const [email,setEmail] = useState('')
    const [nic , setNic] = useState('')
    const navigate = useNavigate()
    return (
        <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-col w-[40%] px-[2%] py-[10%] items-center justify-center shadow-2xl">
            <h1 className="text-[24px] font-semibold">Add new admin account</h1>
            <div className="relative w-full my-3">
            <input
                type="email"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                defaultValue={email}
                onChange = {(e)=>{setEmail(e.target.value)}}
                placeholder="    " />
            <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary" 
                >Email</label >
            </div>
            <div className="relative w-full my-3">
            <input
                type="text"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                defaultValue={nic}
                onChange = {(e)=>{setNic(e.target.value)}}
                placeholder="    " />
            <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                >NIC</label >
            </div>
            <div className="flex flex-row justify-between w-full">
                <Link to={"/admin/Account"}>
                <button className="btn w-[100px] h-[40px] border-none hover:bg-[#DA9D27] text-white font-bold rounded-md bg-error">Back</button>
                </Link>
                {/* <Link to={"/admin/Account/accountPrivilege"}> */}
                <button className="btn w-[100px] h-[40px] border-none hover:bg-[#DA9D27] text-white font-bold rounded-md bg-primary-color"
                onClick={(e)=>{
                    
                    axios.post("http://localhost:5000/admin/",{
                        email : email,
                        nic : nic
                    }).then((res)=>{
                        console.log(res)
                        //navigate to accountPrivilege page with state = {user : res.data}
                        navigate("/admin/Account/accountPrivilege",{state : {user : res.data}})
                        
                    });
                    
                }}>Next</button>
                {/* </Link> */}
            </div>
        </div>
        </div>
    )
}