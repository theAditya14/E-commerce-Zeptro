import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
import emptycart from "../assets/emptycart.png"
import { useNavigate } from "react-router";


export default function Cart() {
  const { cartItem, updateQuantity, deleteButton } =
    useCart();

    const navigation = useNavigate()

  // Grand Total
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price,
    0
  );

  // total price of quantity
  const totalQytPrice = cartItem.reduce(
    (total, item) => total + item.price, 0
  )

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          🛒 Your <span className="text-red-600">Cart</span>
        </h1>

        {/* Empty Cart */}
        {cartItem.length === 0 ? (
          <div className="text-center  py-9">
            <h2 className="text-4xl font-bold text-red-400">
              Your Cart is Empty 😔
            </h2>
            <p className="text-slate-500 mt-2">
              Add some products to continue shopping.
            </p>
            <div className="flex mb-5 justify-center">

              <img src={emptycart} alt="empty item " w-full h-full />
            </div>
            <button onClick={() => navigation('/Product')}  className="border rounded-xl bg-red-500 text-white px-4 py-4 hover:bg-red-600 active:scale-95 transition-all cursor-pointer" >continue to Shoping</button>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="py-4 px-4 text-left">Image</th>
                    <th className="px-4 text-left">Product</th>
                    <th className="px-4 text-left">Brand</th>
                    <th className="px-4 text-center">Price</th>
                    <th className="px-4 text-center">Quantity</th>
                    <th className="px-4 text-center">Total</th>
                    <th className="px-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItem.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t border-slate-200 hover:bg-slate-50 transition"
                    >
                      {/* Image */}
                      <td className="py-4 px-4">
                        <img
                          src={item.images}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                      </td>

                      {/* Product */}
                      <td className="px-4 font-semibold text-slate-800">
                        {item.title}
                      </td>

                      {/* Brand */}
                      <td className="px-4 text-slate-600">{item.brand}</td>

                      {/* Price */}
                      <td className="px-4 text-center font-medium text-slate-800">
                        ${item.price}
                      </td>

                      {/* Quantity */}
                      <td className="px-4">
                        <div className="flex justify-center items-center gap-3">
                          {/*decrease button */}
                          <button
                            onClick={() => updateQuantity(cartItem, item.id, "decrease")}
                            className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="text-lg font-semibold w-8 text-center">
                            {item.quantity}
                          </span>

                          {/* increase button */}
                          <button
                            onClick={() => updateQuantity(cartItem, item.id, "increase")}
                            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </td>

                      {/* Total */}
                      <td className="px-4 text-center font-bold text-green-600">
                        ${item.price * item.quantity}
                      </td>

                      {/* Delete */}
                      <td className="px-4 text-center">
                        <button
                          onClick={() => deleteButton(item.id)}
                          className="p-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
              <h2 className="text-3xl font-bold text-slate-800">
                Grand Total:
                <span className="text-green-600 ml-2">
                  ${totalPrice.toLocaleString()}
                </span>
              </h2>

              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition">
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}