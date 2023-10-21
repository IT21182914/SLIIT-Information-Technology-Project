import React, { useEffect, useState } from "react";
import AddOnesCard from "../../components/Packages/AddOnesCard";
import ItemCard from "../../components/Packages/PackageCard";
import styles from "../../components/Template/Background.module.scss";
import Logo from "../../components/Template/Pictures/Logo.png";
import Footer from "../../components/common/footer";
import OverviewCard from "../../components/Packages/OverviewCard";
import axios from "axios";
import { useParams } from "react-router-dom";

function PackageOverview() {
  const [addOnes, setAddOnes] = useState([
    {
      id: 1,
      imageSrc: "https://via.placeholder.com/100x100",
      description: "Add-Ons Product 1",
      price: 9.99,
      isChecked: false,
    },
    {
      id: 2,
      imageSrc: "https://via.placeholder.com/100x100",
      description: "Add-Ons Product 2",
      price: 19.99,
      isChecked: false,
    },
    {
      id: 3,
      imageSrc: "https://via.placeholder.com/100x100",
      description: "Add-Ons Product 3",
      price: 29.99,
      isChecked: false,
    },
  ]);

  const product = {
    id: 1,
    name: "The Grandeur",
    href: "#",
    avgRating: 5,
    noOfRatings: 120,
    price: "256,000,000",
    description:
      "Our home design package is a comprehensive software suite that e is perfect for DIY enthusiasts, architects, and interior designers alike.",
    options: "8 colors",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  };

  const { id } = useParams();

  // retrieve data from here...
  const [packageDetails, setPackageDetails] = useState("");
  const [packageId, setPackageId] = useState(id);

  useEffect(() => {
    //  axios.get("http://localhost:5000/packages/getPackageById", {params:{id:packageId}}).then((res) => {
    axios
      .get(`http://localhost:5000/packages/getPackageById/${packageId}`)
      .then((res) => {
        setPackageDetails(res.data);
      });
  }, [packageId]);

  //  console.log(packageDetails);

  const handleCheckboxChange = (id) => {
    setAddOnes((prevState) =>
      prevState.map((addOn) => {
        if (addOn.id === id) {
          return { ...addOn, isChecked: !addOn.isChecked };
        }
        return addOn;
      })
    );
  };
  return (
    <div className="h-[110vh] relative">
      <div className="block max-xmd:w-928 h-96">
        {/* Top section of background */}
        <div className={styles.TopSection}>
          <div className={styles.HeadingRow}>
            <div className={styles.LogoIcon}>
              <img src={Logo} style={{ width: 100, height: 100 }} alt="Logo" />
            </div>
          </div>

          {/* Make contents inside here */}

          {/* <div className="flex my-28 place-content-between">
            <div className=" absolute ml-24">
              <div className="mx-auto  px-4">
                <div className="  text-start text-black text-3xl font-bold py-4">
                  {packageDetails.name}
                </div>

                <div className="w-3/4 h-[500px]">
                  <OverviewCard packageDetails={packageDetails} />
                </div>
              </div>
            </div>

            <div className=" mx-[800px] px-16">
              <h1 className="text-xl font-semibold mb-4">Add-Ons</h1>
              <button className="btn btn-info text-white">Custom build</button>
              <div className=" overflow-auto  h-[500px] border-spacing-1">
                {addOnes.map((addOn) => (
                  <AddOnesCard
                    key={addOn.id}
                    imageSrc={addOn.imageSrc}
                    description={addOn.description}
                    price={addOn.price}
                    isChecked={addOn.isChecked}
                    onChange={() => handleCheckboxChange(addOn.id)}
                  />
                ))}
              </div>
            </div>
          </div> */}

          <div className="flex justify-center">
            <div className="flex my-28 justify-center w-9/12 gap-x-10">
              <div className="w-full">
                <div className="px-4">
                  <div className="  text-start text-black text-3xl font-bold py-4">
                    {packageDetails.name}
                  </div>

                  <div className="w-full h-[500px]">
                    <OverviewCard packageDetails={packageDetails} />
                  </div>
                </div>
              </div>

              <div className=" ">
                <h1 className="text-xl font-semibold mb-2">Add-Ons</h1>
                <button className="btn btn-info text-white mb-3">
                  Custom build
                </button>
                <div className=" overflow-auto  h-[500px] border-spacing-1  px-4 shadow-sm">
                  {addOnes.map((addOn) => (
                    <AddOnesCard
                      key={addOn.id}
                      imageSrc={addOn.imageSrc}
                      description={addOn.description}
                      price={addOn.price}
                      isChecked={addOn.isChecked}
                      onChange={() => handleCheckboxChange(addOn.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* This is bottom of Background */}
        </div>
      </div>
      <footer className="w-full mt-5  absolute  bottom-0 -z-50">
        <Footer />
      </footer>
    </div>
  );
}

export default PackageOverview;
