import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddNewPackage from "./AddPackages";
import PackageDashboard from "./PackageDashboard";
import AddAddOns from "./AddAddOns";
import UpdatePackage from "./UpdatePackage";
import UpdateAddons from "./UpdateAddons";
import UpdateAddOns from "./UpdateAddons";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

export default function PackagesPage(props) {
  return (
    <div className="w-[99%] flex flex-col items-center absolute h-full ">
      <div className="w-[100%] flex flex-row justify-end h-[10%]">
        <Link to={"addPackages"}>
          <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                fill="white"
              ></path>{" "}
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                fill="white"
              ></path>
               
            </svg>
            <p>Add Package</p>
          </button>
        </Link>
        <Link to={"addAddons"}>
          <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                fill="white"
              ></path>{" "}
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                fill="white"
              ></path>
               
            </svg>
            <p>Add Add-ons</p>
          </button>
        </Link>
        <button
         onClick={
          () => {
           const doc = new jsPDF();
           const tableColumn = ["Name", "Price", "Description", "Duration", "Cost"];
           const tableRows = [];
       
           // arrayLists.map((packages) => {
           //   const Packagedata = [packages.name, packages.price, packages.description, packages.duration, packages.cost];
           //   tableRows.push(Packagedata);
           // });
           axios.get("http://localhost:5000/packages/getAllPackages").then((res) => {
             res.data.map((packages) => {
               const Packagedata = [packages.name, packages.price, packages.description, packages.duration, packages.cost];
               tableRows.push(Packagedata);
             }
             
             )
             doc.autoTable(tableColumn, tableRows, { startY: 20 });
             doc.save("Packages.pdf");
       
           });
       
          
         }

       }
        class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
          Print package details

         
        </button>
      </div>
      <div className="w-[100%] flex flex-row justify-center  ">
        <Routes>
          <Route path="addPackages" element={<AddNewPackage />} />
          <Route path="addAddons" element={<AddAddOns />} />
          <Route path="updatepackage" element={<UpdatePackage />} />
          <Route path="updateaddons" element={<UpdateAddOns />} />
          <Route path="*" element={<PackageDashboard />} />
        </Routes>
      </div>
    </div>
  );
}
