import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';

export default function ProductListView({product}) {
     const {addToCart} = useCart();
     const navigation  = useNavigate()
  return (
<div className="mt-4 "  key={product.id}>
   <div
    
      className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
    >
      {/* Product Image */}
      <div className="w-full md:w-64 flex items-center justify-center bg-gray-100 rounded-xl p-4" 
        onClick={() => navigation(`/Product/${product.id}`)}
      >
        <img
    
          src={product.thumbnail}
          alt={product.title}
          className="h-56 object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-2 text-yellow-500 font-medium">
            ⭐ {product.rating} / 5
          </p>

          <p className="mt-4 text-gray-600 leading-7">
            {product.description}
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Price</p>

            <h2 className="text-4xl font-bold text-red-500">
              ₹ {product.price}
            </h2>
          </div>

          <button
            onClick={() =>addToCart(product) }
            className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition active:scale-95"
          >
            <IoCartOutline className="text-2xl" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>

   
</div>
  )
}
