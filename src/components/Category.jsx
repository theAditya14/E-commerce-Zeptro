import React from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router";

export default function Category() {
  const { data } = getData();
  const navigate = useNavigate();

  const getUniqCategory = (data, property) => {
    let newVal = data.map((item) => item[property]);
    return [...new Set(newVal)];
  };

  const categories = getUniqCategory(data, "category");

  const icons = {
    beauty: "💄",
    fragrances: "🌸",
    furniture: "🪑",
    groceries: "🛒",
    "home-decoration": "🏠",
    kitchen: "🍽️",
    laptops: "💻",
    smartphones: "📱",
    skincare: "🧴",
    tops: "👕",
    mens: "👔",
    womens: "👗",
    watches: "⌚",
    sunglasses: "🕶️",
    automotive: "🚗",
    motorcycle: "🏍️",
    lighting: "💡",
  };

  return (
    <section className="bg-[#101829] py-12">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Shop By Category
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Explore our popular collections
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center  gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${item}`)}
              className="cursor-pointer bg-[#182236] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-red-500 to-purple-500 flex items-center justify-center text-3xl mb-4">
                {icons[item] || "🛍️"}
              </div>

              <h3 className="text-white font-semibold capitalize">
                {item.replace("-", " ")}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Explore Collection
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}