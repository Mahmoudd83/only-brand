import React from 'react';
import { ShoppingCart, Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import removeFromCart from "../Redux/OnlyBrandSlice"
const Wishlist = () => {
  const dispatch= useDispatch()
  const products = useSelector((state) => state.OnlyBrand.products) || [];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((products) => (
          <div key={products.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img src="images/homeslide/image.jpg" alt={products.name} className="w-full h-auto" />
              {products.isSale && <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-bold rounded-full">Sale</span>}
              {products.isNewArrival && <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-sm font-bold rounded-full">New Arrival</span>}
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-lg">{products.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{products.price}</p>
              <button className="mt-4  ml-24 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 flex items-center justify-center">
                <ShoppingCart className="mr-2 " /> Add to Cart
              </button> 
              <button onClick={()=>dispatch(removeFromCart(
                products.id
              ))} className="mt-2  ml-2  text-red-500 flex items-center justify-center">
                <Delete className="mr-2" /> Remove
              </button> 
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
