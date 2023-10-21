import React from "react";

function CusSiteCard() {
  return (
    <div>
      <div className="m-3 max-w-3xl rounded-lg bg-gray-100 p-4 shadow-md">
        <div className="flex-col">
          <h1 className="mb-7 text-center text-xl font-bold">Site Number</h1>

          <div className="flex flex-col px-10">
            <div className=" flex flex-row place-content-between">
              <div className="flex gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                <span className="badge badge-info gap-2">Start Date :</span>
                <span className="w-fit border-b-2 border-solid border-black">
                  2023/02/15
                </span>
              </div>

              <div className="flex gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                <span className="badge badge-error gap-2">End Date :</span>
                <span className="w-fit border-b-2 border-solid border-black">
                  2023/05/12
                </span>
              </div>
            </div>
            <div className=" flex flex-row gap-4">
              <span>Status :</span> <span>Pending</span>
            </div>
            <div className=" flex flex-row items-center gap-4">
              <span>Description :</span>
              <p className="w-fit p-5">description</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
            progress : 70%
          </div>
          <progress
            className="progress progress-warning h-4"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default CusSiteCard;
