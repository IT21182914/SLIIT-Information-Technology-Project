import React from 'react'
import { useState, useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';

function EqLists(props) {
  const [equipments, setEquipments] = useState([]);
  const [records,setRecord] = useState(equipments);
  const navigate = useNavigate();
  const [totalValue, setTotalValue] = useState(0);
//   const [ setUseNavigate] = useNavigate('');

  useEffect(() => {
    axios
      .get("http://localhost:5000/equipment/")

      .then((res) => {
        console.log(res.data);
        setEquipments(res.data);
        setRecord(res.data)
    async function fetchData() {
      // const response = await axios.get("your-api-url/inventory");
      // setInventory(response.data);
    }

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const deleteEquipment = (id) => {
    axios
      .delete(`http://localhost:5000/equipment/${id}`)
      .then((res) => {
        console.log(res);
        // alert("Equipment Deleted successful");
      })
      .catch((err) => {
        console.log(err);
        // alert("Equipment Deleted unsuccessful");
      });
      window.location.reload();
  };


  // const handleUpdate = (id) => {
  //   navigate(`update/${id}`);
  // };


  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Equipment ID", "Name", "Value", "Description", "Qty"];
    const tableRows = [];

    equipments.forEach((equipment) => {
      const equipmentData = [
        equipment.equipmentId,
        equipment.name,
        equipment.value,
        equipment.description,
        equipment.qty,

      ];
      tableRows.push(equipmentData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("Equipment_List.pdf");
  };


  useEffect(() => {
    axios
      .get('http://localhost:5000/equipment/total-value') // Replace with your server endpoint
      .then((response) => {
        setTotalValue(response.data.totalValue);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Filter = (event) => {
    setRecord (equipments.filter(f => f.name.toLowerCase().includes(event.target.value)))

  }






  return (
    <div className="container mx-auto">

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


                <button onClick={()=> downloadPDF()} class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                    Print Equipment report
                </button>


            <Link to={'addEquipment'}>
                <button class="btn gap-2 bg-[#9747FF] border-none hover:bg-[#7535DD] m-5 normal-case">
                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                    <p>Add Equipment</p>
                </button>
            </Link>


                
      {equipments ? (
      <table className="table-auto w-full">


        <thead>
          <tr>
            <th className="px-4 py-2">Equipment ID</th>
            <th className="px-4 py-2">Image Link</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>

        {/* Only for get idea */}
        <tbody>
          {records.map((equipments) => (
            <tr key={equipments._id}>
              <td className="border px-4 py-2">{equipments.equipmentId}</td>
              <td className="border px-4 py-2"><img src={equipments.imageLink} alt="Equipment Image" style={{ width: '100px', height: 'auto' }} />  </td>
              <td className="border px-4 py-2">{equipments.name}</td>
              <td className="border px-4 py-2">{equipments.value}</td>
              <td className="border px-4 py-2">{equipments.description}</td>
              <td className="border px-4 py-2">{equipments.qty}</td>
              <td className="border px-4 py-2">

              <Link to={'update'} state={{data : equipments}}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded-full"
                  // onClick={() => handleUpdate(equipments._id)}

                  // onClick = {()=> navigate("/update")}
                >
                  Update
                </button>
                </Link>

                <br/><br/>

                
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-2 rounded-full"
                  onClick={() => deleteEquipment(equipments._id)}
                >
                  Delete
                </button>
              </td>
            </tr>


          ))} 
        </tbody>
      </table>


      ) : (
        ""
      )}
    </div>
  );
  
}

export default EqLists