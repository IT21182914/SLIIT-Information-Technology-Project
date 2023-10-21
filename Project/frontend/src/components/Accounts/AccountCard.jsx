import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccountCard({account , accountSetter}) {
    const navigate = useNavigate()
    return(
        <div className="flex flex-row w-[100%] shadow-xl mt-2 bg-white h-[230px] p-[5px] items-center relative rounded-md mb-5">
            <div className="h-[200px] w-[200px] overflow-hidden flex justify-center items-center rounded-full">
                <img className=" h-[100%] m-[5px]" src={account.image} alt="Avatar"/>
            </div> 
            <div className="h-[200px] p-[5px] ml-[25px] flex flex-col  items-left justify-between">
                <h1 className="font-bold text-[30px]">{account.gender=="male"?"Mr.":"Ms."} {account.firstName+" "+account.lastName}</h1>
                <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Privileges:</h1>
                    <p className="ml-[5px] text-[20px] max-w-[60%]">{account.privileges.map((response)=>{
                        return response+" | "
                    })}</p>
                </div>
                <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Email:</h1>
                    <h1 className="ml-[5px] text-[20px]">{account.email}</h1>
                </div>
                <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Hired date:</h1>
                    <h1 className="ml-[5px] text-[20px]">{account.lastLogin}</h1>
                </div>
            </div> 
            <div className="absolute right-[5px] p-[15px] h-[100%] flex flex-col justify-between">
                <button className="btn gap-2 bg-white text-black border-[#7535DD] hover:bg-[#7535DD]  normal-case"
                onClick={(e)=>{
                    navigate("/admin/Account/accountPrivilege",{state : {user : account}})
                }}>
                    <svg fill="none" stroke="currentColor" width={"25"} height={"25"} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <p>Edit privileges</p>
                </button>
                {account.activated?<button className="btn gap-2 bg-[#ED254E] border-none hover:bg-[#FF0000]  normal-case"
                onClick={(e)=>{
                    alert("Are you sure you want to disable this account?")
                    axios.post("http://localhost:5000/admin/restrict",{
                        adminId : account._id
                    }).then((response)=>{
                        console.log(response)
                        
                    })
                }}>
                    <svg fill="none" stroke="currentColor" width={"25"} height={"25"} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Disable</p>
                </button>:
                <button className="btn gap-2 bg-[#0e4e11] border-none   normal-case"
                onClick={(e)=>{
                    alert("Are you sure you want to enable this account?")
                    axios.post("http://localhost:5000/admin/activateAgain",{
                        adminId : account._id
                    }).then((response)=>{
                        console.log(response)
                        
                    })
                }}>
                    <svg fill="none" stroke="currentColor" width={"25"} height={"25"} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Enable</p>
                </button>}
                <button className="btn gap-2 bg-[#ED254E] border-none hover:bg-[#FF0000]  normal-case"
                onClick={(e)=>{
                    console.log(account._id)
                    axios.delete("http://localhost:5000/admin/"+account._id).then((res)=>{
                        console.log(res)
                        window.location.reload()
                    }
                    )
                }}
                
                >
                    <svg fill="none" stroke="currentColor" width={"25"} height={"25"} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>                    
                    <p>Delete Account</p>
                </button>
            </div>
            
           
        </div>
    )
}