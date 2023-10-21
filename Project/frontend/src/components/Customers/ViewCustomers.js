import axios from "axios";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ViewCustomers(props) {
  const [customerList, setCustomerList] = useState([]);
  const [records,setRecords] = useState(customerList);
  useEffect(() => {
    axios
      .get("http://localhost:5000/customer")
      .then((res) => {
        console.log(res.data);
        setCustomerList(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!customerList) {
    return <div>Finding data....</div>;
  }

  var arrayLists = [];

  customerList &&
    customerList.map((item) => {
      const data = {
        name:
          item.gender === "male"
            ? "Mr." + item.firstName + " " + item.lastName
            : "Ms." + item.firstName + " " + item.lastName,
        email: item.email,
        contact: item.phone,
      };
      arrayLists.push(data);
    });

  console.log(arrayLists);

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Name", "Email", "Contact number"];
    const tableRows = [];

    arrayLists.map((customer) => {
      const CustomerData = [customer.name, customer.email, customer.contact];
      tableRows.push(CustomerData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("Customer.pdf");
  };


  //Search Function

const Filter = (event) => {


  setRecords (customerList.filter(f => f.firstName.toLowerCase().includes(event.target.value)))
  
  
  }

  return (
    <div className="p-10 w-full h-96 overflow-auto">

<div style={{width:"35%",textAlign:"center",margin:"auto auto"}} class="input-group mb-5">

 


     
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

<br /> <br />
     
<br />
      {records.map((val, key) => {
        return (
          <div className="flex flex-row w-[100%] shadow-xl bg-white h-[230px] p-[5px] items-center relative rounded-md mb-5">
            <div className="h-[100px] w-[100px] overflow-hidden flex justify-center items-center rounded-full">
              <img className=" h-[100%] m-[5px]" src={val.image} alt="Avatar" />
            </div>
            <div className="h-[200px] p-[5px] ml-[25px] flex flex-col  items-left justify-between">
              <h1 className="font-bold text-[30px]">
                {val.gender === "male" ? "Mr." : "Ms." + " "}
                {" " + val.firstName + " " + val.lastName}
              </h1>
              <div className="flex  flex-row">
                <h1 className="font-bold text-[20px]">Email:</h1>
                <h1 className="ml-[5px] text-[20px]">{val.email}</h1>
              </div>

              <div className="flex  flex-row">
                <h1 className="font-bold text-[20px]">Contact Number:</h1>
                <h1 className="ml-[5px] text-[20px]">{val.phone}</h1>
              </div>
            </div>
            <div className="absolute right-[50px] py-[95px] h-[100%] flex flex-col justify-between">
              <button class="btn gap-2 bg-[#ED254E] border-none hover:bg-[#FF0000]  normal-case">
                <svg
                  fill="none"
                  stroke="currentColor"
                  width={"25"}
                  height={"25"}
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <p
                  onClick={(e) => [
                    axios
                      .delete("http://localhost:5000/customer/" + val._id)
                      .then((res) => {
                        console.log(res.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      }),
                      window.location.reload()
                  ]}
                >
                  Delete Customer
                </p>
              </button>
            </div>
            
          </div>

          
        );
      })}

<br /> <br />
      <button
        onClick={generatePDF}
        className="m-auto flex h-14 w-fit items-center gap-2 rounded-full px-4 py-4 font-medium text-white dark:bg-gray-800"
      >
        <span className="h-8 w-8 text-blue-500">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </span>
        <span>Generate Report</span>
      </button>
    </div>
  );
}
