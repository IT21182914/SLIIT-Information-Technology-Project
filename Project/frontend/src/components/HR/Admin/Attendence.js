import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Attendence() {

  const [userCount, setUserCount] = useState(0);
  const [dayAttendence, setDayAttendence] = useState(0);
  const [empId, setEmpID] = useState("");

  var present = dayAttendence/userCount*100;

console.log("KKKKKKKKKKKKKKKKKKKKKKKKKK")
console.log(userCount);
console.log("PPPPPPPPPPPPPPPPPPPPPPP")
console.log(dayAttendence)

  useEffect(() => {
    axios.get("http://localhost:5000/employee/userCount")
    .then((res)=>{
      console.log(res);
      setUserCount(res.data.count);
    }
    )
    .catch((err)=>{
      console.log(err);
    }
    )

    axios.get("http://localhost:5000/employee/dayAttendence")
      .then((res)=>{
        console.log(res);
        setDayAttendence(res.data.attendance[0].count);
      }
      )
      .catch((err)=>{
        console.log(err);
      }
      )

  }
  , [dayAttendence])


function handleSubmit(){
 

    console.log("submit");    

    axios.post(`http://localhost:5000/employee/markAttendance/${empId}`)
    .then((res)=>{
      console.log(res);
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    }
    )

  
}
  return (
    <div>
      <div className="w-full bg-gray-50">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0">
          <p className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-black">Employee Availability</p>
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="mb-1 text-lg font-medium dark:text-black">
                  Employee Availability
                  <div />
                  <br />
                  <div className="h-7 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-7 rounded-full bg-yellow-400 p-2 text-center text-xs font-medium leading-none text-blue-100" style={{width: `${present}%`}} >{present.toFixed(2)}%</div>
                  </div>
                  <br />
                  <div className="flex flex-row place-content-around items-end gap-8">
                    <div>
                      <label className="mb-1 block pr-4 font-medium dark:text-black md:mb-0" for="inline-full-name"> Enter employee Id </label>
                      <input onChange={
                        (e)=>{
                          setEmpID(e.target.value);
                        }
                      } className="w-96 appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none" id="inline-full-name" type="text" placeholder="Enter employee Id" />
                    </div>

                    <div className="gap-x-10">
                      <button onClick={handleSubmit} className="focus:shadow-outline rounded bg-blue-800 px-8 py-1 font-bold text-white shadow hover:bg-blue-500 focus:outline-none" type="button">marked</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
