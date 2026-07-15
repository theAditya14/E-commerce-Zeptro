import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'

export const DataContext = createContext(null)

export default function DataProvider({children}) {
 const  [data,setData] = useState([])


//fetching all products from api 
const fetchAllProducts = async()=>{
    try{
        const res =  await axios.get("https://dummyjson.com/product")
        let products = res.data.products
            //  console.log(products.slice(0,7))
             setData(products)
    } catch(error){
        console.log(error)
}
}


 

// Category only data
 const getUniqCategory = (data, property) => {

    let newVal = data.map((curElem) => {
      return curElem[property];

    }) 
    // Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection
    newVal = ["All",...new Set(newVal)]
   
    return newVal;
  }


  const categoryOnlyData = getUniqCategory(data,"category")
  const brandOnlyData = getUniqCategory(data,"brand") 

//Auto-fetch products when component mounts
useEffect(() => {
    fetchAllProducts()
}, [])

   return <DataContext.Provider value = {{data, setData , fetchAllProducts , categoryOnlyData ,brandOnlyData}}>
    {children}
   </DataContext.Provider>




}


export const getData = () =>useContext(DataContext)
 