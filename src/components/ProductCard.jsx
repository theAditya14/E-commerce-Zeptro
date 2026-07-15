import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const navigation = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">

      {/* Product Image */}
      <div
        onClick={() => navigation(`/Product/${item.id}`)}
        className="cursor-pointer bg-gray-100"
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-52 object-contain p-4"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-4">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-14">
          {item.title}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-500 capitalize mt-2">
          {item.category}
        </p>

        {/* Price */}
        <div className="mt-3">
          <span className="text-2xl font-bold text-red-500">
            ${item.price}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => addToCart(item)}
          className="mt-auto flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-lg py-3 font-semibold transition active:scale-95"
        >
          <IoCartOutline className="text-2xl" />
          Add to Cart
        </button>

      </div>
    </div>
  );
}