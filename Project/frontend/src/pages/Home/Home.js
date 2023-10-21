import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Home/Header";
import PopularItems from "../../components/Packages/index";
import SketchfabModel from "../../components/Home/SketchfabEmbed";
import Footer from "../../components/common/footer";
import Navbar from "../../components/common/Navbar";
import ThreeComponent from "../../components/Packages/ThreeDModel";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div className="">
          <SketchfabModel />
      
        </div>
       
      </div>
  
      <PopularItems />
      <ThreeComponent />
      <Footer />
    </div>
  );
};

export default Home;
