import React from 'react'

import { getData } from '../context/DataContext'
import { useState } from "react";

export default function FliterSection({ search, setSearch, categoryFilter, setCategoryFilter, brandFilter, setBrandFilter, priceRangeFilter, setPriceRangeFilter, handlerCatogoryChange, handlerBrandChange,  }) {

  const { categoryOnlyData, brandOnlyData } = getData();
const [showFilter, setShowFilter] = useState(false);

return (
  <>
    {/* Mobile Filter Button */}

    <div className="lg:hidden mb-4">
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="w-full bg-red-500 text-white py-3 rounded-md font-semibold"
      >
        {showFilter ? "Hide Filters ▲" : "Show Filters ▼"}
      </button>
    </div>

    <div
      className={`bg-white lg:w-72 w-full rounded-md p-4 h-max shadow-md
      ${
        showFilter
          ? "block"
          : "hidden"
      } lg:block`}
    >
      <input
        className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category */}

      <h1 className="text-lg font-semibold mt-5">
        Category
      </h1>

      <div className="flex flex-col gap-2 mt-2">

        {categoryOnlyData.map((item, indx) => (
          <div
            key={indx}
            className="flex gap-2"
          >
            <input
              type="checkbox"
              checked={categoryFilter === item}
              value={item}
              onChange={handlerCatogoryChange}
            />

            <button className="cursor-pointer">
              {item}
            </button>
          </div>
        ))}

      </div>

      {/* Brand */}

      <h1 className="text-lg font-semibold mt-5">
        Brand
      </h1>

      <select
        value={brandFilter}
        onChange={handlerBrandChange}
        className="border-2 border-gray-300 rounded-md py-2 mt-3 mb-4 w-full"
      >
        <option value="">Select Brand</option>

        {brandOnlyData.map((item, indx) => (
          <option
            key={indx}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>

      {/* Price */}

      <h1 className="text-lg font-semibold mt-5">
        Price Range
      </h1>

      <div className="flex flex-col gap-2 mt-2">

        <label>
          Price : ${priceRangeFilter[0]} - $
          {priceRangeFilter[1]}
        </label>

        <input
          className="w-full"
          type="range"
          value={priceRangeFilter[1]}
          min="0"
          max="5000"
          step="100"
          onChange={(e) =>
            setPriceRangeFilter([
              priceRangeFilter[0],
              parseInt(e.target.value),
            ])
          }
        />
      </div>

      <button
        className="bg-red-500 text-white py-2 px-4 rounded-md mt-5 w-full"
        onClick={() => {
          setSearch("");
          setCategoryFilter("All");
          setBrandFilter("All");
          setPriceRangeFilter([0, 5000]);
        }}
      >
        Reset Filter
      </button>
    </div>
  </>
);
}
