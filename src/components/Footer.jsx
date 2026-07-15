import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter  } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
  {/* <!-- Main Footer --> */}
  <div className="max-w-7xl mx-auto px-8 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* <!-- Company Info --> */}
      <div>
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Zaptro
        </h2>

        <p className="text-gray-300 mb-6 leading-7">
          Powering Your World with the Best in Electronics.
        </p>

        <div className="space-y-2 text-gray-300">
          <p>123 Electronics St, Style City, NY 10001</p>
          <p>Email: support@Zaptro.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* <!-- Customer Service --> */}
      <div>
        <h3 className="text-3xl font-semibold mb-6">
          Customer Service
        </h3>

        <ul className="space-y-4 text-gray-300">
          <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
          <li><a href="#" className="hover:text-red-500">Shipping & Returns</a></li>
          <li><a href="#" className="hover:text-red-500">FAQs</a></li>
          <li><a href="#" className="hover:text-red-500">Order Tracking</a></li>
          <li><a href="#" className="hover:text-red-500">Size Guide</a></li>
        </ul>
      </div>

      {/* <!-- Social --> */}
      <div>
        <h3 className="text-3xl font-semibold mb-6">
          Follow Us 
          <div className="flex gap-3 mt-3 text-xl">
          <FaFacebookF />
        <FaInstagram />
</div>
        </h3>

        <div className="flex gap-5 text-2xl">
          <a href="#" className="hover:text-red-500">
            <i className="fab fa-facebook"></i>
          </a>

          <a href="#" className="hover:text-red-500">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className="hover:text-red-500">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" className="hover:text-red-500">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      {/* <!-- Newsletter --> */}
      <div>
        <h3 className="text-3xl font-semibold mb-6">
          Stay in the Loop
        </h3>

        <p className="text-gray-300 mb-6">
          Subscribe to get special offers, free giveaways, and more
        </p>

        <form className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-l-md text-black outline-none"
          />

          <button
            className="bg-red-600 hover:bg-red-700 px-6 rounded-r-md font-medium">
            Subscribe
          </button>
        </form>
      </div>

    </div>
  </div>

 
  <div className="border-t border-slate-700">
    <div className="max-w-7xl mx-auto py-6 text-center text-gray-300">
      © 2026 <span className="text-red-500">Zaptro</span>. All rights reserved.
    </div>
  </div>
</footer>
  )
}
