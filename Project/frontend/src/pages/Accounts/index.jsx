import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AddAccount } from "../../components/Accounts/AddAccount";
import AccountPrivilege from "../../components/Accounts/AccountPrivilege";
import { AccountView } from "../../components/Accounts/AccountView";
import jsPDF from "jspdf";
import axios from "axios";



export default function AccountsPage(props) {
  return (
    <div className="w-[99%] flex flex-col items-center absolute h-full ">
      <div className="w-[100%] flex flex-row justify-end h-[10%]" >
        <Link to={'addAccount'}>
        <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
            <p>Add Account</p>
        </button>
        </Link>
        <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case" onClick={(e)=>{
            
              const doc = new jsPDF();
              const tableColumn = ["First name", "Last name", "NIC", "Email", "Phone"];
              const tableRows = [];
          
              // arrayLists.map((packages) => {
              //   const Packagedata = [packages.name, packages.price, packages.description, packages.duration, packages.cost];
              //   tableRows.push(Packagedata);
              // });
              axios.get("http://localhost:5000/admin/all").then((res) => {
                res.data.map((admin) => {
                  const adminData = [
                    admin.firstName,
                    admin.lastName,
                    admin.nic,
                    admin.email,
                    admin.phone                    
                  ];
                  tableRows.push(adminData);
                });
                doc.autoTable(tableColumn, tableRows, { startY: 20 });
              doc.save("Admin information.pdf");
              });
          
              
            
          
        }}>
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
            Print log report
        </button>
        </div>
        <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
            <Routes>
                
                <Route path="addAccount" element={<AddAccount/>} />
                <Route path="accountPrivilege" element={<AccountPrivilege/>}/>
                <Route path="*" element={<AccountView/>} />

            </Routes>
        </div>
    </div>
  );
}