import { quantum } from "ldrs";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {

    const [cartItem, setCartItem] = useState([]);

    const addToCart = (item) => {
        const itemInCart = cartItem.find((Product) => Product.id === item.id)

        if (itemInCart) {
            const updateCart = cartItem.map((Product) =>
                Product.id === item.id ? { ...Product, quantity: Product.quantity + 1 } : Product

            )
            setCartItem(updateCart)
            toast.success("Product quantity is increase")
            console.log(cartItem)
        } else {

            setCartItem([...cartItem, { ...item, quantity: 1 }])
            toast.success("Product is added to Cart ")
        }

    }

    // increament handling increasing or decreasing
    const updateQuantity = (cartItem, productId, action) => {
        //  setCartItem(  cartItem.map((item) =>{
        //     if(item.id === productId){
        //         let newUnit = item.quantity;
        //         if(action === 'increase'){
        //             newUnit = newUnit+1;

        //         } else if(action==="decrease"){
        //             newUnit = newUnit-1;

        //         }
        //         return newUnit> 0 ? {...item,quantity:newUnit} : null
        //     }
        //     return item;

        //    }).filter(item=> item != null) //remove item qunatity 0
        //    )

             const add_remove = cartItem.map((item) => { 
                   // This is my code writen in easy way that can I undersatand :
            if (item.id === productId) {
                let newUnit = item.quantity;

                if (action === "increase") {
                  newUnit = newUnit + 1;
                   toast.success("Product quantity is increase")
                } else if (action === "decrease") {
                    newUnit = newUnit- 1;
                     toast.success("Product quantity is decrease")
                }
                return newUnit > 0 ? { ...item, quantity: newUnit } : null;
            }
            return item;
        })

        const if_zero_quantity = add_remove.filter((item) => item != null)

        setCartItem(if_zero_quantity)
          



    }


    // delete function
    //  it is basicaly remove/delete itm
    const deleteButton = (productId) => {
        const delet_Item = cartItem.filter(item => item.id !== productId) // ye filter kya kar rha h ider --> auger item.id productId se match hoti h to usko hata deta h 
        setCartItem(delet_Item)
         toast.success("Product delete to Cart")
    }



    return <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteButton }} >
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

