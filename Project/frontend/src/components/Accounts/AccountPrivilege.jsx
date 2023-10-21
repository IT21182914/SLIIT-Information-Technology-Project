import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AccountPrivilege(props) {

    const data = useLocation().state.user
    const navigate = useNavigate()
    
    const [privileges,setPrivileges] = useState(data.privileges)

    return (
        <div className="flex h-[95%] flex-col items-center justify-between p-7 shadow-2xl rounded-xl">
            <h1 className="text-[24px] font-semibold">{data.email}</h1>
            <div className="h-[150px] w-[150px] overflow-hidden flex justify-center items-center rounded-full">            
                <img className=" h-[100%] m-[5px]" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
                
            </div>
            <div className="form-control">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" defaultChecked={data.privileges.includes("account")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                console.log(privileges)
                                setPrivileges([...privileges,"account"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("account"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Account control</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("finance")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                console.log(privileges)
                                setPrivileges([...privileges,"finance"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("finance"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Finance management</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("site")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                setPrivileges([...privileges,"site"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("site"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Site management</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("equipment")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                setPrivileges([...privileges,"equipment"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("equipment"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Equipment management</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("customer")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                setPrivileges([...privileges,"customer"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("customer"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Customer management</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("HR")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                setPrivileges([...privileges,"HR"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("HR"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Human Resource management</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("package")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                setPrivileges([...privileges,"package"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("package"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Package management</span>
                        
                    </label>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-success" 
                        defaultChecked={data.privileges.includes("transport")}
                        onChange={(e)=>{
                            if(e.target.checked){
                                setPrivileges([...privileges,"transport"])
                            }else{
                                const temp = privileges
                                temp.splice(temp.indexOf("transport"),1)
                            }
                        }}/>
                        <span className="label-text text-[20px] ml-2 font-semibold w-full">Tranport management</span>                        
                    </label>                    
                </div> 
                
            <div className="flex flex-row justify-between w-full">
                <Link to={"/admin/Account"}>
                <button className="btn w-[100px] h-[40px] border-none hover:bg-[#DA9D27] text-white font-bold rounded-md bg-error">Back</button>
                </Link>
                {/* <Link to={"/admin/Account/accountPrivilege"}> */}
                <button className="btn w-[100px] h-[40px] border-none hover:bg-[#DA9D27] text-white font-bold rounded-md bg-primary-color" 
                onClick={(e)=>{
                    axios.post("http://localhost:5000/admin/editPrivileges",{
                        adminId:data._id,
                        privileges:privileges
                    }).then((res)=>{
                        console.log(res.data)
                        navigate("/admin/Account")
                    }
                    )

                }}>Next</button>
                {/* </Link> */}
            </div>
        </div>        
    )
}