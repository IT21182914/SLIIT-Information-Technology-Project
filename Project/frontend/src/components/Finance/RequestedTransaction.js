import React from "react";

export default function RequestedTransaction(props) {
  return (
    <div>
      <div className="card w-full bg-neutral text-neutral-content text-xs mb-4">
        <div className="items-left card-body grid grid-cols-3 gap-y-1 text-left">
          <div className="flex w-20 flex-row col-end-1">
            <span className="mr-1 font-bold">Amount</span>
          </div>
          <div className="col-span-3">
            <span>{props.cost}</span>
          </div>

          <div className="flex w-20 flex-row col-end-1">
            <span className="mr-1 font-bold">Description</span>
          </div>

          <div className="col-span-3">
            <span className="mr-1 w-10">
              {props.description}
            </span>
          </div>

          <div className="flex w-20 flex-row col-end-1">
            <span className="mr-1 font-bold">Status</span>
          </div>
          <div className="mr col-span-3">
            <span className="mr-1 w-20 col-end-1 col-span-3">{props.status}</span>
          </div>
          <div className="flex w-20 flex-row col-end-1">
            <span className="mr-1 font-bold">Note</span>
          </div>
          <div className="col-span-3">
            <span className="mr-1 w-20 col-span-3">{props.note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
