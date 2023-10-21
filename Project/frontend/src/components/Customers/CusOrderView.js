import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CusRequestView() {
  const [custRequestList, setCustRequestList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/customOrder")
      .then((res) => {
        console.log(res.data);
        setCustRequestList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return custRequestList.map((val, key) => {
    return (
      <div class="m-auto mt-3 flex w-4/5 flex-col items-center">
        <table class="w-full text-left text-sm text-blue-100 dark:text-blue-100">
          <thead class="bg-blue-600 text-xs text-white dark:text-white">
            <tr>
              <th scope="col" class="w-52 bg-blue-500 px-4 py-3 text-lg">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-sm">
                {val.description}
              </th>
            </tr>
          </thead>
          <tbody class="bg-blue-600 text-xs text-white dark:text-white">
            <tr class="border-blue-400 bg-blue-600">
              <th scope="col" class="w-52 bg-blue-500 px-4 py-3 text-lg">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-sm">
                {val.status}
              </th>
            </tr>
            <tr class="border-blue-400 bg-blue-600">
              <th scope="col" class="bg-blue-500 px-4 py-3 text-lg">
                Response
              </th>
              <th scope="col" class="px-6 py-3 text-sm">
                {val.responseDetails}
              </th>
            </tr>

            <tr class="border-blue-400 bg-blue-600">
              <th scope="col" class="bg-blue-500 px-4 py-3 text-lg">
                Estimate Dates
              </th>
              <th scope="col" class="px-6 py-3 text-sm">
                {val.estDays + " Days"}
              </th>
            </tr>

            <tr class="border-blue-400 bg-blue-600">
              <th scope="col" class="bg-blue-500 px-4 py-3 text-lg">
                Document View
              </th>
              <th
                scope="col"
                class="flex flex-row place-content-center px-6 py-3 text-sm"
              >
                <button
                  class="btn btn-active w-48 hover:bg-slate-900"
                  onClick={(e) => {
                    window.open(val.documentLink);
                  }}
                >
                  View Document
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
}
