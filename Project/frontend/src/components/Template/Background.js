import React, { useEffect, useState, useContext, useRef } from "react";
import styles from "./Background.module.scss";
import Image from "./Pictures/Search.png";
import Logo from "./Pictures/Logo.png";
import Notification from "./Pictures/Notification.png";
import Menue from "./DropdownMenue";
import Dashboard from "./Dashboard";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AccountsPage from "../../pages/Accounts";
import FinanceReq from "./Pictures/FinanceReq.png";
import PackagesPage from "../../pages/Packages";
import RequestedTransaction from "../Finance/RequestedTransaction";
import TransportPage from "../../pages/Transport";
import FinanceDashBoardLinker from "../../pages/Finance";
import CustomerPage from "../../pages/Customers";
import EqDashboards from "../../pages/Equipment/EqDashboard";
import SitePage from "../../pages/Site";
import HRPage from "../../pages/HR/Index";
import axios from "axios";
import { adminContext } from "../../user/adminContext";
import DashboardPage from "../../pages/Dashboard/Dashboard ";

export default function Background(props) {
  const [cost, setCost] = useState(0);
  const [comment, setComment] = useState("");
  const { admin, setAdmin } = useContext(adminContext);

  const costFeild = useRef(null);
  const descFeild = useRef(null);

  const user = {
    name: "Wickramasinghe",
  };
  const [activeTile, setActiveTile] = React.useState("Dashboard");
  const [myRequest, setMyRequest] = useState([]);

 
  useEffect(() => {
    const getData = () => {
      axios.get("http://localhost:5000/financeRequest/show")
        .then((res) => {
          setMyRequest(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [myRequest]);



  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname.includes("admin/Dashboard")) {
      setActiveTile("Dashboard");
    } else if (location.pathname.includes("admin/Finance")) {
      setActiveTile("Finance");
    } else if (location.pathname.includes("admin/Site")) {
      setActiveTile("Site");
    } else if (location.pathname.includes("admin/Equipment")) {
      setActiveTile("Equipment");
    } else if (location.pathname.includes("admin/Customer")) {
      setActiveTile("Customer");
    } else if (location.pathname.includes("admin/HR")) {
      setActiveTile("");
    } else if (location.pathname.includes("admin/Package")) {
      setActiveTile("Package");
    } else if (location.pathname.includes("admin/Transport")) {
      setActiveTile("Transport");
    } else if (location.pathname.includes("admin/Account")) {
      setActiveTile("Account");
    }
  }, [location, activeTile,]);

  console.log("active : " + activeTile);

  return (
    <div className="block max-xmd:w-928 ">
      {/* Top section of background */}
      <div className={styles.TopSection}>
        <div className="Dashboard">{<Dashboard activeTile={activeTile} />}</div>

        <div className={styles.HeadingRow}>
          <div className={styles.LogoIcon}>
            <Link to="/">
            <img src={Logo} style={{ width: 100, height: 100 }} alt="Logo" />
            </Link>
          </div>

          <div className={styles.SearchBtnWrapper}>
            <input
              type="search"
              placeholder="Search..."
              id="search"
              className={styles.SearchBar}
            />
            <label htmlFor="search" className={styles.SearchLbl}>
              <img src={Image} alt="Search button" />
            </label>
          </div>

          <div className="dropdown dropdown-end absolute w-11 h-11 top-7 right-60 cursor-pointer hover:scale-105 duration-300 z-50">
            <label tabIndex="0" className="">
              <div className="w-11 h-11 cursor-pointer hover:scale-105 duration-300 z-50">
                <img src={Notification} alt="Notification" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow mt-4 z-50"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end absolute w-11 h-11 top-7 right-80 cursor-pointer hover:scale-105 duration-300 z-50">
            <label tabIndex="0" className="">
              <div className="w-11 h-11 cursor-pointer invert hover:scale-105 duration-300 z-50">
                <img src={FinanceReq} alt="Notification" />
              </div>
            </label>
            <div
              tabIndex="0"
              className="dropdown-content menu rounded-box w-80 bg-base-100 p-2 mt-4 z-50 shadow-xl"
            >
              <div>
                <div className="flex flex-col h-56 overflow-auto">
                  {myRequest.map((request) => {
                    let status = "";

                    if(request.approved == true){
                      status = "Approved";
                    }else if(request.declined == true){
                      status = "Rejected";
                    }else{
                      status = "Pending";
                    }
                    return (

                      <RequestedTransaction
                        cost={request.cost}
                        description={request.description}
                        status={status}
                        note={request.note}
                      />
                    );
                  }
                  )}
                </div>
              </div>

              <form
                onSubmit={
                  //get the data from the form and send it to the backend
                  () => {
                    axios
                      .post("http://localhost:5000/financeRequest/post", {
                        cost: cost,
                        description: comment,
                        section: "Finance",
                      })
                      .then((res) => {
                        alert("form submitted successfully ");
                        costFeild.current.value = "";
                        descFeild.current.value = "";
                        console.log(res);
                      })
                      .catch((err) => {
                        alert("form submitted Unsuccessfully ");
                        console.log(err);
                      });

                    console.log("form submitted");
                  }
                }
              >
                <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                  <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
                    <div className="mb-1">
                      <label
                        htmlFor="small-input"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        cost
                      </label>
                      <input
                        onChange={(e) => {
                          setCost(e.target.value);
                        }}
                        ref={costFeild}
                        type="number"
                        id="small-input"
                        required
                        placeholder="Enter cost"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-xs"
                      />
                    </div>
                    <label
                      htmlFor="comment"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your comment
                    </label>
                    <textarea
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                      ref={descFeild}
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
                      Post comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="absolute right-40 top-8">
            {<Menue userName={user.name} />}
          </div>
        </div>
      </div>

      {/* Make contents inside here */}
      <div className={styles.ContentSection}>
        <h1 className="text-3xl font-bold text-center uppercase p-6">
          {activeTile}
        </h1>
        {props.search}
        <Routes>

        <Route path="Dashboard/*" element={<DashboardPage/>} />
          <Route
            path="Finance/*"
            element={
              <h1>
                <FinanceDashBoardLinker />
              </h1>
            }
          />
          <Route
            path="Site/*"
            element={
              <h1>
                <SitePage />
              </h1>
            }
          />
          <Route
            path="Equipment/*"
            element={
              <h1>
                <EqDashboards />
              </h1>
            }
          />
          <Route
            path="Customer/*"
            element={
              <h1>
                <CustomerPage />
              </h1>
            }
          />
          <Route
            path="HR/*"
            element={
              <h1>
                <HRPage />
              </h1>
            }
          />
          <Route path="Package/*" element={<PackagesPage />} />
          <Route
            path="Transport/*"
            element={
              <h1>
                <TransportPage />
              </h1>
            }
          />
          <Route
            path="Account/*"
            element={
              <h1>
                <AccountsPage />
              </h1>
            }
          />
        </Routes>
      </div>

      {/* This is bottom of Background */}
      <div className={styles.BottomSection} />
    </div>
  );
}
