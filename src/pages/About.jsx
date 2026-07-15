import React from 'react'
import { useNavigate } from 'react-router'

export default function About() {
  const navigation = useNavigate()
  return (
    <div className="max-w-6xl rounded-2xl min-h-screen mt-10 mx-auto bg-gray-200 mb-9 ">

<h1 className='text-3xl py-5 font-bold text-center'>About Zaptro</h1>


<p className='px-12 text-xl'>Welcome to <snap className="text-red-500  font-bold">Zaptro</snap>, your one-stop destination for the latest and greatest in electronics. Form cutting-edge gadgets to must-have accessoris, we're here to power up your tech life with premium products and unbeatable service.</p>


<div className='mt-4'>
<h2 className='text-red-500 font-bold px-12 text-2xl  '>Our Mission</h2>
<p className=' px-12 text-xl '>
  At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
</p>
</div>


<div className='mt-4'>
  <h2 className='text-red-500 font-bold px-12 text-2xl py-4 '> Why Choose Zaptro ?</h2>
 
 <ul className='px-18 list-disc'>
  <li>Top-quality electronic products from trusted brands</li>
  <li>Lightning-fast and secure shipping</li>
  <li>Reliable customer support, always ready to help</li>
  <li>Easy returns and hassle-free shopping experience</li>
 </ul>

</div>



   <div className='mt-4'> <h2 className= 'text-red-500 font-bold px-12 text-2xl py-4'>
    Our Vision
    </h2>

    <p className='px-12 text-xl '>We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.</p></div>

<div className='text-center mt-5 '>

             <h2 className= 'text-red-500 font-bold text-xl text-center mb-2  '>Join the Zaptro Family</h2>

             <p className=' text-center  mb-4 '>Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.</p>

             <button className='w-30 cursor-pointer active:scale-95 hover:bg-red-600 h-10 mb-5 text-white rounded-2xl text-center bg-red-500' onClick={()=>navigation("/product")}>
Start Shoping
             </button>
</div>



    </div>
  )
}
