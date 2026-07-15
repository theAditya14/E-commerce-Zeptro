import React from 'react'
import { useNavigate } from 'react-router'

export default function Breadcrums({ title }) {
    const navigate = useNavigate()
  return (
    <div className="max-w-6xl flex flex-row items-center gap-5 justify-center my-10">
   <h1 className="text-2xl text-gray-700 font-semibold flex gap-3">
     <span className="text-gray-500 cursor-pointer" onClick={()=>navigate('/')}>Home</span> 
    <span className="text-gray-500 cursor-pointer" onClick={()=>navigate('/product')}>Product</span>

     </h1>

     <h1 className='text-3xl text-black'>{title}</h1>
    </div>
  )
}
