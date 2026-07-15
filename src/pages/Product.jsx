import React from 'react'
import { getData } from '../context/DataContext'
import { useEffect,useState } from 'react'
import FliterSection from '../components/FliterSection'
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import Lottie from 'react-lottie'
import empty from '../assets/empty.json'
import productnotfound from '../assets/productnotfound.png'




export default function Product() {
  const { data, fetchAllProducts } = getData()

  const [search,setSearch] = useState("")
  const [categoryFilter,setCategoryFilter] = useState("All")
 const [brandFilter,setBrandFilter] = useState("All")
 const [priceRangeFilter,setPriceRangeFilter] = useState([0,5000])

 //pages 
 const [page, setPage] = useState(1);


 const handlePageChange = (newPage) => {
    setPage(newPage);
  }


  const handlerCatogoryChange = (e) => {
    setCategoryFilter(e.target.value)
    console.log(categoryFilter)
  }
  const handlerBrandChange = (e) => {
    setBrandFilter(e.target.value)
    console.log(brandFilter)
  }
  const handlerPriceRangeChange = (e) => {
    setPriceRangeFilter([priceRangeFilter[0], parseInt(e.target.value)])
    console.log(priceRangeFilter)
  }

  const filteredData = data?.filter((item) => {

 return ( item.title.toLowerCase().includes(search.toLowerCase()) &&
    (categoryFilter === "All" || item.category === categoryFilter) &&
    (brandFilter === "All" || item.brand === brandFilter) &&
    (item.price >= priceRangeFilter[0] && item.price <= priceRangeFilter[1]))
})

//dynamic page change based on filtered data length

  const totalPages = Math.ceil(filteredData.length / 8);
 


  useEffect(() => {
    // Fetch data or perform any necessary actions when the component mounts
    fetchAllProducts()
  }, []);





  // Animation options for Lottie
  const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: empty,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

  return (
    <div>
      <div className='max-w-7xl  bg-gray-100 mt-10 mx-auto px-4 mb-10 '>
        {
          data?.length > 0 ? (
         <>   <div className='flex gap-8  w-full h-full '>
              <FliterSection handlerCatogoryChange={handlerCatogoryChange} handlerBrandChange={handlerBrandChange} handlerPriceRangeChange={handlerPriceRangeChange} search={search} setSearch={setSearch} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} brandFilter={brandFilter} setBrandFilter={setBrandFilter} priceRangeFilter={priceRangeFilter} setPriceRangeFilter={setPriceRangeFilter} />

            {
              filteredData?.length > 0 ? (
                <div className='flex flex-col justify-center items-center'>

                  <div className='grid grid-cols-4 gap-7'>
                {filteredData?.slice((page - 1) * 8, page * 8).map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}

              </div>
                </div>
              ):(
                <div className='flex mx-auto justify-center flex-col gap-12 mt-10  items-center h-100' >
                <h1 className='text-3xl mt-20  font-bold text-red-500  '>No products found</h1>
                <img src={productnotfound} alt="product not found" className=' h-full  ' />

                {/* <Lottie options={defaultOptions}  className='w-full h-full'/> */}
                </div>
       )
   }



            </div> 

          

              <Pagination totalPages={totalPages} page={page} handlePageChange={handlePageChange}/>
           
              </>
              
          ) : (
            <div className='flex justify-center items-center h-100' >
              {/*  Default values shown */}
              <Ring
                size="40"
                stroke="5"
                bgOpacity="0"
                speed="2"
                color="black"
              />
            </div>
          )
        }


      </div>
    </div>


  )
}


