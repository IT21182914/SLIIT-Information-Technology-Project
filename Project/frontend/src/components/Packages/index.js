import React, { useEffect, useState } from "react";
import ItemCard from "./PackageCard";
import axios from "axios";

const products = [
  {
    id: 1,
    name: "The Grandeur",
    source: "Maria's Kitchen",
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
  },
  {
    id: 2,
    name: "Villa Mirage",
    href: "#",
    avgRating: 3.2,
    noOfRatings: 51,
    source: "Anoma's Kitchen",
    price: "25,054,000",
    description:
      "With a user-friendly interface and powerful features, our software is perfect for DIY enthusiasts, architects, and interior designers alike.",
    options: "Black",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Front ",
  },
  {
    id: 3,
    name: "The Palatial Palace",
    href: "#",
    source: "Maria's Kitchen",
    avgRating: 2,
    noOfRatings: 127,
    price: "32,054,000",
    description:
      "user-friendly interface and powerful features, our software is perfect for DIY enthusiasts, architects, and interior designers alike.",
    options: "8 colors",
    imageSrc:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Eight s",
  },
];

const PopularItems = () => {
  const [popularItems, setPopularItems] = useState(products);

  // retrieve data from here...
  const [packages, setPackages] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/packages/getAllAprovedPackages").then((res) => {
      setPackages(res.data);
    });
  }, []);


  return (
    <div className="bg-white">
      <div className="mx-auto py-10 max-w-7xl px-8">
        <div className="text-start my-6 mb-10 text-3xl font-bold">
          Golden Packages
        </div>

        <div className="grid gap-y-4 grid-cols-3 gap-x-8">
          {packages.map((product) => (
            <ItemCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
