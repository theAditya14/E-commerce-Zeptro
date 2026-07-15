import React from 'react'

export default function MidBanner() {
    return (
        <div className=' mid:py-24 mt-30 '>

            <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-fixed h-137.5 md-h-[600px]    bg-[url(/banner3.jpg)]  bg-center '
            //  style={{backgroundImage: `url(${banner} ) ,backgroundPosition:'center', backgroundAttachment:'fixed`}}
            >

                <div className=' '>
                <div className='text-center  text-white px-30 ' >
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold md-4'>Next-Gen Electronics at Your Fingertips</h1>
                    <p className='text-lg md:text-xl mb-6'>
                        <br />
                     Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
                    </p>
                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>

                </div>

                </div>




            </div>






        </div>
    )
}
