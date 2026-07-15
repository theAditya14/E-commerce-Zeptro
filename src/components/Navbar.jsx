import { Link, NavLink } from 'react-router'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCaretDown } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { useCart } from '../context/CartContext'


import { HiMenuAlt3 } from "react-icons/hi";





export default function Navbar({ location, getLocation,openDropdown,setOpentDropdown }) {

  const {cartItem} = useCart();

const [openNav, setOpenNav] = useState(false);

  const items = [
    {
      element: "/",
      name: "Home"
    },
    {
      element: "/product",
      name: "Products"
    },
    {
      element: "/about",
      name: "About"
    },
    {
      element: "/contact",
      name: "Contact"
    }
  ]

  const toggleDropdown = () => {
    setOpentDropdown(!openDropdown)
  }






  return (
//     <div className='bg-white py-3 shadow-2xl '>
//       <div className='max-w-6xl mx-auto flex justify-between items-center px-4'>
//         {/* logo section */}
    

//            <div className="flex items-center gap-4">

//   {/* Mobile Menu */}
//   <button
//     onClick={() => setOpenMenu(true)}
//     className="lg:hidden text-3xl"
//   >
   
//   </button>

//   {/* Logo */}
//   <Link to="/">
//     <h1 className="font-bold text-3xl">
//       <span className="text-4xl text-red-600 font-serif">Z</span>aptro
//     </h1>
//   </Link>

//   {/* Desktop Location */}
//   <div className="hidden lg:flex gap-1 cursor-pointer text-gray-700 items-center">
//     <IoLocationSharp className="text-2xl text-red-500" />

//     <span className="font-semibold">
//       {location ? (
//         <div>
//           <p>{location.county}</p>
//           <p>{location.state}</p>
//         </div>
//       ) : (
//         "Add Address"
//       )}
//     </span>

//     <FaCaretDown onClick={toggleDropdown} />
//   </div>

// </div>


//         {/* Menu section */}
//         <nav className=' md:flex items-center gap-7  hidden'>
//           <ul className='flex gap-7 items-center text-xl font-semibold'>
//             {items.map((data, idx) => (
//               <li key={idx}>
//                 <NavLink to={data.element} className={({ isActive }) => isActive ? 'text-red-600 border-b-2 border-red-600 transition-all' : 'text-black'}>
//                   {data.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* cart icon */}
//           <Link to='/cart' className='relative'>
//             <FaCartShopping className='h-7 w-7' />
//             <span className='bg-red-600 px-2 text-center rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
//           </Link>

      



//           <Show when="signed-out">
//             <SignInButton className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700  transition-all scale-95 cursor-pointer" />

//             <SignUpButton className="bg-red-300 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700  transition-all scale-95 cursor-pointer" />
//           </Show>
//           <Show when="signed-in">
//             <UserButton />
//           </Show>
//         </nav>

//       </div>
//     </div>

 <>
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            onClick={() => setOpenNav(true)}
            className="lg:hidden text-3xl"
          >
            <HiMenuAlt3 />
          </button>

          {/* Logo */}
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-red-600 text-4xl font-serif">Z</span>aptro
            </h1>
          </Link>

          {/* Desktop Location */}
          <div className="hidden lg:flex gap-2 items-center cursor-pointer">

            <IoLocationSharp className="text-red-500 text-2xl" />

            <div
              onClick={toggleDropdown}
              className="flex items-center gap-1"
            >
              <div className="leading-4">
                {location ? (
                  <>
                    <p className="font-semibold">{location.county}</p>
                    <p className="text-sm text-gray-500">
                      {location.state}
                    </p>
                  </>
                ) : (
                  <p className="font-semibold">Add Address</p>
                )}
              </div>

              <FaCaretDown />
            </div>

          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          <ul className="flex gap-8 text-lg font-semibold">

            {items.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.element}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "hover:text-red-500 transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link to="/cart" className="relative">

            <FaCartShopping className="w-7 h-7" />

            <span className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
              {cartItem.length}
            </span>

          </Link>

          <Show when="signed-out">
            <div className="hidden sm:flex gap-2">

              <SignInButton className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" />

              <SignUpButton className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition" />

            </div>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>

        </div>

      </div>
    </div>

    {/* Location Dropdown */}

    {openDropdown && (
      <div className="fixed top-20 left-10 lg:left-60 bg-white shadow-2xl border rounded-lg p-5 z-50 w-72">

        <div className="flex justify-between items-center mb-4">

          <h2 className="font-semibold text-lg">
            Change Location
          </h2>

          <CgClose
            className="cursor-pointer"
            onClick={toggleDropdown}
          />

        </div>

        <button
          onClick={() => {
            getLocation();
            toggleDropdown();
          }}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Detect My Location
        </button>

      </div>
    )}

    {/* Mobile Overlay */}

    {openNav && (
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setOpenNav(false)}
      />
    )}

    {/* Mobile Drawer */}

    <div
      className={`fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ${
        openNav ? "translate-x-0" : "-translate-x-full"
      }`}
    >

      <div className="flex justify-between items-center p-5 border-b">

        <h2 className="font-bold text-2xl">
          Menu
        </h2>

        <CgClose
          onClick={() => setOpenNav(false)}
          className="text-3xl cursor-pointer"
        />

      </div>

      <div className="p-5">

        {/* Mobile Location */}

        <div
          onClick={toggleDropdown}
          className="flex items-center gap-3 mb-8 cursor-pointer"
        >

          <IoLocationSharp className="text-red-500 text-2xl" />

          <div>

            {location ? (
              <>
                <p className="font-semibold">
                  {location.county}
                </p>

                <p className="text-sm text-gray-500">
                  {location.state}
                </p>
              </>
            ) : (
              <p>Add Address</p>
            )}

          </div>

        </div>

        {/* Mobile Menu */}

        <ul className="space-y-6 text-lg font-semibold">

          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.element}
                onClick={() => setOpenNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600"
                    : "text-gray-700"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* Mobile Auth Buttons */}

        <Show when="signed-out">
          <div className="mt-10 flex flex-col gap-3 sm:hidden">

            <SignInButton className="bg-red-600 text-white py-2 rounded-lg" />

            <SignUpButton className="bg-red-400 text-white py-2 rounded-lg" />

          </div>
        </Show>

      </div>

    </div>
  </>







  )
}
