import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateTranc(props) {
  const location = useLocation();
  const { _id, name, profile, description, payment, tID, date } =
    location.state.details;

  const details = {
    tID: tID,
    date: date,
    amount: payment,
    descip: description,
    prfile: profile,
  };

  const [amount, setAmount] = useState(details.amount);
  const [desc, setDesc] = useState(details.descip);

  const navigate = useNavigate();
  const goBack = (e) => navigate("/admin/finance/transaction");

  function updateDate(e) {
    e.preventDefault();
    console.log(amount + " and " + desc);
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-24 mb-8 h-24 bg-purple-400 rounded-full ">
          <img
            className="w-24 mb-8 h-24 bg-purple-400 rounded-full object-cover"
            src={details.prfile}
            alt="profilephoto"
          />
        </div>

        <div className="flex flex-col px-4 py-2 gap-4">
          <div className="flex flex-row items-center gap-3">
            <span className="inline-block text-sm font-bold text-gray-700">
              {" "}
              Transaction ID :{" "}
            </span>
            <span className="text-sm font-medium text-gray-800">
              {details.tID}
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span className="inline-block text-sm font-bold text-gray-700">
              {" "}
              Date Time :{" "}
            </span>
            <span className="text-sm font-medium text-gray-800">
              {details.date}
            </span>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newProduct = {
              transacton: _id,
              description: desc,
              price: amount,
            };

            axios
              .put(
                `http://localhost:5000/transaction/update/${_id}`,
                newProduct
              )
              .then((response) => {
                goBack();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <div className="w-96 rounded-b-lg bg-white px-4 py-2">
            <label
              className="mb-4 block text-sm font-bold text-gray-700 float-left"
              htmlFor="username"
            >
              {" "}
              Amount{" "}
            </label>
            <input
              className="block w-full border border-black bg-white p-2 text-sm text-gray-800 focus:ring-0"
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Amount"
              required
            />
          </div>

          <div className="w-96 rounded-b-lg bg-white px-4 py-2 mb-10 ">
            <label
              htmlFor="editor"
              className="mb-7 block text-sm font-bold text-gray-700  float-left"
            >
              Description
            </label>
            <textarea
              id="editor"
              rows="8"
              className="block w-full border border-black bg-white p-2 text-sm text-gray-800 focus:ring-0 "
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Description..."
              required
            ></textarea>
          </div>

          <div className="w-full flex flex-row gap-14 mb-10 p-4 place-content-between">
            <div>
              <button
                className="w-24 h-10 rounded-xl bg-blue-700 text-center text-lg font-semibold text-white "
                onClick={(e) => {
                  e.preventDefault();
                  goBack();
                }}
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-24 h-10 rounded-xl bg-red-700 text-center text-lg font-semibold text-white "
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
