import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApprovelTab(props) {
  const [isApprove, setIsApprove] = useState(false);
  const [name, setName] = useState(props.userName);
  const [profile, setProfile] = useState(props.profile);
  const [description, setDescription] = useState(props.description);
  const [payment, setPayment] = useState(props.payment);

  const [note, setNote] = useState("");

  return (
    <div>
      <div>
        <div className="card card-side flex w-fit flex-row items-center bg-base-100 px-10 shadow-2xl">
          <div className="h-24 w-24 rounded-full border border-black">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={profile}
              alt={profile}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-2 py-1 text-left">
              <span className="text-left text-base font-bold">{name}</span>
            </div>
            <div className="flex flex-row items-center gap-5 px-2 py-1 text-left text-sm font-semibold">
              <span>Request payment of : </span>
              <span className="rounded-3xl bg-white px-2 py-1">{payment}</span>
            </div>
            <div className="h-12 w-96 overflow-x-hidden px-2 py-1 text-left text-sm font-normal">
              <span>{description}</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .put(
                    `http://localhost:5000/financeRequest/approve/${props.id}`
                  )
                  .then((res) => {
                    alert("Approve ok");
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="btn flex h-11 w-fit items-center gap-4 rounded-lg border border-black text-black hover:text-white hover:bg-green-500 bg-white p-2 text-right text-xs font-bold"
            >
              <span className="inline-block h-8 w-8 rounded-full bg-green-600">
                <svg
                  className="h-8 w-8 stroke-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Approve
            </button>

            <div className="dropdown dropdown-end cursor-pointer duration-300 w-fit">
              <label tabIndex="0" className="">
                <div className="cursor-pointer duration-300 hover:scale-105">
                  <button className="btn flex h-11 w-fit items-center gap-4 rounded-lg border border-black bg-white p-2 text-black hover:text-white hover:bg-red-500 text-right text-xs font-bold">
                    <span className="inline-block h-8 w-8 rounded-full bg-red-500">
                      <svg
                        className="h-8 w-8 stroke-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </span>
                    Decline
                  </button>
                </div>
              </label>
              <div
                tabIndex="0"
                className="dropdown-content menu rounded-box z-50 mt-4 w-80 bg-base-100 p-2 shadow-xl"
              >
                <form
                  onSubmit={() => {
                    axios
                      .put(
                        `http://localhost:5000/financeRequest/decline/${props.id}`,
                        {
                          note: note,
                        }
                      )
                      .then((res) => {
                        alert("Decline");
                        console.log(res.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                    <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
                      <label
                        htmlFor="comment"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Decline Note{" "}
                      </label>
                      <textarea
                        onChange={(e) => {
                          setNote(e.target.value);
                        }}
                        id="comment"
                        rows="4"
                        className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write a comment..."
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
      </div>
    </div>
  );
}
