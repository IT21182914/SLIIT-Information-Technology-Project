import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewOrders() {
  return (
    <div className="flex flex-row w-[100%] shadow-xl bg-white h-[230px] p-[5px] items-center relative rounded-md mb-5">
   
    <div className="h-[200px] p-[5px] ml-[25px] flex flex-col  items-left justify-between">
        <h1 className="font-bold text-[30px]">Mr.Customer Name</h1>
        <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Description:
        </h1>
            <h1 className="ml-[5px] text-[20px]">A three storied building with 5 classrooms</h1>
        </div>

        
        
        <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Budget:</h1>
            <h1 className="ml-[5px] text-[20px]">Rs.30,000,000</h1>
        </div>
        <div className="flex  flex-row"><h1 className="font-bold text-[20px]">Document Details:</h1>
            <h1 className="ml-[5px] text-[20px]">Land Deed</h1>
        </div>
    </div> 
    <div className="absolute right-[50px] py-[50px] h-[100%] flex flex-col justify-between">
        <button class="btn gap-2 bg-[#7535DD]  border-none hover:bg-[#7535DD]  normal-case ">
            <svg fill="none" stroke="currentColor" width={"25"} height={"25"} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            <p>Accept</p>
        </button>
     

        

        <div className="dropdown dropdown-end cursor-pointer duration-300 w-fit">
              <label tabindex="0" className="">
                <div className="cursor-pointer p-[50px] duration-300 hover:scale-105">
                <button class="  btn gap-2 bg-[#ED254E] border-none hover:bg-[#FF0000]  normal-case">
            <svg fill="none" stroke="currentColor" width={"25"} height={"25"} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>   
          
            <p>Decline</p>
            
        </button>
                </div>
              </label>
              <div
                tabindex="0"
                className="dropdown-content menu rounded-box z-50 mt-4 w-80 bg-base-100 p-2 shadow-xl"
              >
                <form>
                  <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                    <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
                      <label
                        for="comment"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Decline Order{" "}
                      </label>
                      <textarea
                        id="comment"
                        rows="4"
                        className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write the reason of decline..."
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>




    </div>
    
    
   
</div>
  )
}
