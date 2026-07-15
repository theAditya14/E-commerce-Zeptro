import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { useEffect, useState,useRef } from 'react'
import axios from 'axios';
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'
import { useCart } from './context/CartContext'
import ProtectorRouter from './components/ProtectorRouter'

export default function App() {
  const [location, setLocation] = useState()
  const [openDropdown, setOpentDropdown] = useState(false)
  const{cartItem,setCartItem} = useCart()
  const isFirstSave = useRef(true)

     useEffect(()=>{
         const storedCart = localStorage.getItem('cartItem')
         if(storedCart){
          setCartItem(JSON.parse(storedCart))
         }
         // mark that we've attempted to load from storage
         isFirstSave.current = false
     },[])


//save data to local storage (skip the initial run)
     useEffect(()=>{
      if(isFirstSave.current) return
      localStorage.setItem("cartItem",JSON.stringify(cartItem))    
     },[cartItem])








  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const { latitude, longitude } = pos.coords;
        // console.log(latitude, longitude);
        // 

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;


        try {
          const location = await axios.get(url)
          // console.log(location.data.address.county)
          const exactLocation = location.data.address
          setLocation(exactLocation)
          setOpentDropdown(false)

        } catch (error) {
          console.log(error)
        }
      }
    )
  }

  useEffect(() => {
    getLocation()
  }, [])  

    


  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpentDropdown={setOpentDropdown} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Product/:id' element={<SingleProduct />} />
        <Route path='/Category/:category' element={<CategoryProduct/>}/>

   
        <Route path='/cart' element={
          <ProtectorRouter>
            <Cart />
          </ProtectorRouter>
        } />

        
    

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
