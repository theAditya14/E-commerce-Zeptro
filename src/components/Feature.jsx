import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { Truck,Lock,RotateCcw,Clock} from 'lucide-react';

export default function Feature() {
  const fetures = [
    {icon : Truck, text:"Free Shipping", subtext:'On order over$100' },
    {icon: Lock, text: "Secure Payment", subtext: "100% secure payment"},
    {icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy"},
    {icon: Clock, text: "24/7 Support", subtext: "We are here to help"},


  ]
  return (

  <div className='bg-gray-100 py-`8 mt-20 px-4 sm:px-6 lg:px-8'>
    
  <div className='max-w-7xl mx-auto '>
    <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6'>
         {fetures.map((item, index) => (
          <div key={index} className='flex flex-col justify-center sm:text-left items-center text-center'>
            <item.icon className=' shrink-0  w-10 h-10 text-gray-600' />
            <p className=' text-base font-medium text-gray-900'>{item.text}</p>
            <p className='text-sm mt-1 text-gray-500'>{item.subtext}</p>
          </div>
        ))}
    </div>

  </div>
  </div>



  )
}
