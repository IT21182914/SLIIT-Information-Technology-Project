import React from "react";

export default function TotalAndPayment() {
  return (
    <div>
      <div className="ite flex flex-row place-content-around items-center">
        <div className="bg flex flex-row items-center gap-3">
          <label
            htmlFor="disabled-input"
            className="z-10 bg-white text-lg text-gray-500 dark:text-gray-400"
          >
            Total :{" "}
          </label>
          <input
            type="text"
            id="disabled-input"
            className="block w-fit cursor-default rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value="100000.00"
            disabled
          />
        </div>

        <div className="flex flex-row gap-5">
          <button className="btn btn-outline btn-sm bg-blue-500 text-white hover:bg-blue-700">
            Request Money
          </button>
          <button className="btn btn-outline btn-sm bg-blue-500 text-white hover:bg-blue-700">
            Finalize Payment
          </button>
        </div>
      </div>
    </div>
  );
}
