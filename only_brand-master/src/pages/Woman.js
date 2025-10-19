import { ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToCart, addToWishlist } from "../Redux/OnlyBrandSlice";
import { useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Woman = () => {
  const data = useLoaderData();
  const ProductsData = data.data;
  const dispatch = useDispatch();

  // فلترة المنتجات للنوع "نسائي" فقط
  const womenProducts = ProductsData.filter(
    (product) => product.kind === "women"
  );

  const [likedItems, setLikedItems] = useState({}); // مفتاح id يحمل حالة كل عنصر

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => {
      const updatedLikedItems = {
        ...prevLikedItems,
        [id]: !prevLikedItems[id],
      };
      return updatedLikedItems;
    });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 lg:grid-cols-4 gap-6">
      {/* عرض المنتجات فقط إذا كان هناك منتجات نسائيه */}
      {womenProducts.length > 0 && (
        <>
          {womenProducts.map((product) => (
            <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="relative">
              <img
                src={product.imageCover}
                alt={product.name}
                className="w-full h-56 object-contain"
              />
              {product.state === "New Arrival" ? (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New Arrival
                </span>
              ) : product.state === "Sale" ? (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Sale
                </span>
              ) : null}
                <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => {
                  toggleLike(product.id);
                  dispatch(
                    addToWishlist({
                      id: product.id,
                      name: product.name,
                      description: product.description,
                      brand: product.brand,
                      title: product.title,
                      price: product.price,
                      imageCover: product.imageCover,
                      state: product.state,
                    })
                  );
                }}
              >
                {likedItems[product.id] ? (
                  <FavoriteIcon className="text-red-500" />
                ) : (
                  <FavoriteBorderIcon className="text-gray-500" />
                )}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-md font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{product.title}</p>
              <h3 className="text-md font-medium text-gray-800">
                {product.price} EGP
              </h3>
              <div className="mt-4 w-full flex justify-center products-center">
                <button
                  className="bg-black w-full text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 flex justify-center products-center gap-2"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        title: product.title,
                        price: product.price,
                        image: product.imageCover,
                        description: product.description,
                        quantity: 1,
                      })
                    )
                  }
                >
                  <ShoppingCart fontSize="small" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Woman;
