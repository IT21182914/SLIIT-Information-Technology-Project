import React, { useEffect, useState } from "react";
import ReportComp from "../../components/Finance/ReportComp";
import axios from "axios";

export default function GenerateReport() {
  const title = "Generate report";

  const [data, setData] = useState([]);
 
  //get data from backend and assign to details
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/transaction/w")
      .then((response) => {
        setData(response.data); // Update the entire response data object
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-10 p-10">
        <ReportComp details={data} />
      </div>
    </div>
  );
}
