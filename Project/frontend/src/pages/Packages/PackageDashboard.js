import React, { useEffect, useState } from "react";
import DishCard from "../../components/Packages/DashCard";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, json } from "react-router-dom";
import axios from "axios";
import AdminOverview from "./AdminOverview";
import AddOnesList from "../../components/Packages/AddOnesList";
import PackageCard from "../../components/Packages/DashCard";
import jsPDF from "jspdf";
import "jspdf-autotable";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PackageDashboard = () => {
  const [dishes, setDishes] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [backgroundImg, setBackgroundImg] = useState(
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  );

  const [userFeedback, setUserFeedback] = useState({
    avgRating: 4.4,
    noOfRatings: 102,
  });
  const [packages, setPackages] = useState([]);

  const [packagesList, setpackagesList] = useState([]);
  const [records, setRecords] = useState(packagesList);

  useEffect(() => {
    axios.get("http://localhost:5000/packages/getAllPackages").then((res) => {
      setPackages(res.data);
      setpackagesList(res.data);
      setRecords(res.data);
    });
  }, []);

  console.log(packages);

  if (!packagesList) {
    return <div>Finding data....</div>;
  }

  var arrayLists = [];

  packagesList &&
    packagesList.map((item) => {
      const data = {
        name: item.name,
        price: item.price,
        description: item.description,
        duration: item.duration,
        cost: item.cost,
      };
      arrayLists.push(data);
    });

  console.log(arrayLists);

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Name", "Price", "Description", "Duration", "Cost"];
    const tableRows = [];

    // arrayLists.map((packages) => {
    //   const Packagedata = [packages.name, packages.price, packages.description, packages.duration, packages.cost];
    //   tableRows.push(Packagedata);
    // });
    axios.get("http://localhost:5000/packages/getAllPackages").then((res) => {
      res.data.map((packages) => {
        const Packagedata = [
          packages.name,
          packages.price,
          packages.description,
          packages.duration,
          packages.cost,
        ];
        tableRows.push(Packagedata);
      });
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("Packages.pdf");
  };

  //Search Function

  const Filter = (event) => {
    setRecords(
      packagesList.filter((f) =>
        f.name.toLowerCase().includes(event.target.value)
      )
    );
  };

  return (
    <div>
      <div>
        <div className="absolute  w-full bg-cover bg-blend-overlay" />

        <div className="w-6xl p-2 backdrop-blur-xl bg-white text-black h-[600px]">

          {/* Search component */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search packages"
                className="input input-bordered"
                onChange={Filter}
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-96  ">
            <h1 className="font-bold text-lg text-purple-800">
              Packages List{" "}
            </h1>
            <h1 className="font-bold text-lg text-purple-800">Add-Ons List </h1>
          </div>
          <div className="flex space-x-4 justify-start p-4">
            {/* <div className="w-12/12 " style={{ height: "30rem" }}>
              {packages.map((item, idx) => {
                return (
                  // <div key={item._id}>
                  <PackageCard
                    isButtonVisible={isButtonVisible}
                    item = {item}
                  />
                  // </div>
                );
              })}
            </div> */}

            <div className=" overflow-scroll h-[450px] ">
              <div className=" w-[600px]">
                {records.map((item, idx) => {
                  return (
                    <div key={item._id}>
                      <PackageCard
                        isButtonVisible={isButtonVisible}
                        item={item}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" overflow-x-auto h-[450px]">
              <AdminOverview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDashboard;
