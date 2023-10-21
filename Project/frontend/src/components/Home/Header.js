import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DropdownMenue from "../Template/DropdownMenue";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <div
            className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-gray-900"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1607134541550-2994abb8077b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="slide 1"
            className="w-full h-xl object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
            alt="slide 2"
            className="w-full h-xl object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="slide 3"
            className="w-full h-xl object-cover"
          />
        </div>
      </Slider>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-6 z-10">
      </div>
      <div className="z-20 glex items-center">
        <div className="text-5xl font-semibold text-white">
        Start  Make Your Dream Home Today
        </div>
      </div>
    </div>
  );
};

export default Header;
