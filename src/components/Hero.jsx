import React, { useContext, useEffect } from 'react'
import {DataContext, getData} from "../context/DataContext"
import Slider from "react-slick";

const RealSlider = Slider && Slider.default ? Slider.default : Slider;

export default function Hero() {
  const {fetchAllProducts,data} = getData()

  

  useEffect(()=>{
    fetchAllProducts()
  },[])

const settings = {
  
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
};

  return (
    <div className='overflow-x-hidden'> 

 <RealSlider {...settings}>
     
     {
      data?.slice(0,7)?.map((item,) =>{
       return (
  <div
    key={item.id}
    className="bg-linear-to-r from-[#0f0c29] via-[#303b63] to-[#24243e]"
  >
    <div className="max-w-7xl mx-auto min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-10 gap-10">

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h3 className="text-red-500 font-semibold uppercase tracking-wider text-sm md:text-base">
          Beauty That Speaks Confidence
        </h3>

        <h1 className="text-white font-bold uppercase mt-4 leading-tight text-3xl sm:text-4xl lg:text-6xl line-clamp-3">
          {item.title}
        </h1>

        <p className="text-gray-300 mt-5 text-sm sm:text-base md:text-lg leading-7 line-clamp-4 max-w-xl mx-auto lg:mx-0">
          {item.description}
        </p>

        <button className="mt-8 px-7 py-3 bg-linear-to-r from-red-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-95 transition">
          Shop Now
        </button>

      </div>

      {/* Image Section */}

      <div className="w-full lg:w-1/2 flex justify-center">

        <div className="bg-white rounded-full p-4 shadow-2xl shadow-red-500/30 hover:scale-95 transition duration-300">

          <img
            src={item.images[0]}
            alt={item.title}
            className="w-60 sm:w-72 md:w-96 lg:w-125 aspect-square object-cover rounded-full"
          />

        </div>

      </div>

    </div>
  </div>
);
      })
     }
   
     
   
    </RealSlider>

    </div>
  );
}
