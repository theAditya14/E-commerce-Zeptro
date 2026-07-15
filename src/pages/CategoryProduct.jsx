import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCart } from "../context/CartContext";
import ProductListView from "../components/ProductListView";
import productnotfound from "../assets/productnotfound.png";
import { IoMdArrowDropleft } from "react-icons/io";

import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
import { ArrowBigRight } from "lucide-react";

const CategoryProduct = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate()

  const { addToCart } = useCart();

  const getFilterData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0,0)
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="bg-linear-to-r from-red-500 to-purple-500 py-16 text-center text-white">
        <h1 className="text-4xl font-bold capitalize">{category}</h1>

        <p className="mt-3 text-lg text-pink-100">
          Discover the best {category} products
        </p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {!loading && (
          <h2 className="mb-8 text-2xl font-bold">
            {products.length} Products Found
          </h2>
        )}
        <button onClick={()=>navigation('/')} className="border rounded-2xl flex flex-row gap-2 py-2 px-4  text-white bg-black font-bold active:scale-95 hover:bg-gray-900 ">    
        <IoMdArrowDropleft className=" h-7"/> Back</button>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center h-100">
            <Ring
              size="45"
              stroke="5"
              bgOpacity="0"
              speed="2"
              color="black"
            />
          </div>
        ) : products.length > 0 ? (
          /* Products */
          <div className="space-y-6">
            {products.map((product) => (
              <ProductListView
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20">
            <img
              className="w-80"
              src={productnotfound}
              alt="No Products"
            />

            <h2 className="mt-6 text-3xl font-bold">
              No Products Found
            </h2>

            <p className="mt-2 text-gray-500">
              This category doesn't have any products.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;