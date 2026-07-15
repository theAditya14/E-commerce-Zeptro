import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { useCart } from "../context/CartContext";
import Breadcrums from "../components/Breadcrums";



export default function SingleProduct() {
  const param = useParams();
  const [singleProduct, setSingleProduct] = useState('')
  const { addToCart } = useCart();



  //get single data from api using id
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${param.id}`)
      setSingleProduct(res.data)
      console.log(res.data)

    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getSingleProduct()
    window.scrollTo(0,0)
  }, [param.id])






  return (
    <>

      {
        singleProduct ? (
          <div className="px-4 pb-4 md:px-0">
            <Breadcrums title={singleProduct.title} />




            <div className="min-h-screen bg-slate-100 py-10 px-5">
              <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">

                  {/* LEFT SIDE - IMAGE */}
                  <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-8">
                    <img
                      src={singleProduct.thumbnail}
                      alt={singleProduct.title}
                      className="max-h-115 object-contain transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* RIGHT SIDE - DETAILS */}
                  <div className="flex flex-col justify-center">

                    {/* Category */}
                    <span className="w-fit bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {singleProduct.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                      {singleProduct.title}
                    </h1>

                    {/* Brand */}
                    <p className="mt-3 text-lg text-gray-600">
                      Brand :
                      <span className="font-semibold text-black ml-2">
                        {singleProduct.brand}
                      </span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="text-yellow-400 text-xl">
                        ⭐⭐⭐⭐⭐
                      </div>
                      <span className="text-gray-500">(4.8 Reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="mt-6">
                      <h2 className="text-5xl font-bold text-green-600">
                        ${singleProduct.price}
                      </h2>
                      <p className="text-gray-500 mt-1">
                        Inclusive of all taxes
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mt-8">
                      <h3 className="font-semibold text-xl mb-2">
                        Description
                      </h3>

                      <p className="text-gray-600 leading-8">
                        {singleProduct.description}
                      </p>
                    </div>

                    {/* Product Info */}
                    <div className="grid grid-cols-2 gap-5 mt-8">

                      <div className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 shadow-sm">
                        <p className="text-gray-500  text-sm">Brand</p>
                        <h4 className="font-semibold">
                          {singleProduct.brand}
                        </h4>
                      </div>

                      <div className="bg-gray-50  hover:bg-gray-100 rounded-xl p-4 shadow-sm">
                        <p className="text-gray-500 text-sm">Category</p>
                        <h4 className="font-semibold">
                          {singleProduct.category}
                        </h4>
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 mt-10">

                      <button onClick={() => addToCart(singleProduct)} className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
                        🛒 Add To Cart
                      </button>

                      <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition px-8 py-4 rounded-xl font-semibold">
                        Buy Now
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            </div>


          </div>
        ) : (<div className='flex justify-center items-center h-100' >
          {/*  Default values shown */}
          <Ring
            size="40"
            stroke="5"
            bgOpacity="0"
            speed="2"
            color="black"
          />

        </div>
        )
      }
    </>
  );
}