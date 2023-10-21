import React, { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import axios from "axios";
export function AccountView(props){
    const[accounts,setAccounts] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/admin/all").then((res)=>{
            setAccounts(res.data)
        }
        )
    },[])

    return(
    <div className="flex flex-col items-center w-[100%] p-[5px] ">
        <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search packages"
                className="input input-bordered"
                onChange={(e)=>{
                    if(e.target.value == ""){
                        axios.get("http://localhost:5000/admin/all").then((res)=>{
                            setAccounts(res.data)
                        }
                        )
                    }else{
                        const temp = accounts.filter((account)=>{
                            return account.email.includes(e.target.value)
                        })
                        setAccounts(temp)
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

        {
            accounts.map((account,index)=>{
                return <AccountCard key={index} account={account} accountSetter={setAccounts}/>
            }
            )

        }        
    </div>)
}