import React, { useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useLocation } from "react-router-dom";
import Recommend from "../components/Recommend";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../Redux/OnlyBrandSlice";

const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.product; // استقبال بيانات المنتج من الصفحة السابقة

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <div className="p-8 md:p-8 lg:flex lg:gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={product.imageCover}
                alt={product.name}
                width={250}
                className="h-40 object-cover rounded-md hover:shadow"
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>

          <p className="text-lg font-semibold mt-4">{product.price} EGY</p>
          <p className="text-green-600 mt-2">🚚 GET IT TOMORROW</p>

          {/* Size Selector */}
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="flex gap-2">
              {product.sizes
                ? product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))
                : ["S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
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
                    state: product.state,
                  })
                )
              }
              variant="contained"
              color="primary"
              className="w-full"
              style={{ textTransform: "none" }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              startIcon={<FavoriteBorderIcon />}
              className="w-full"
              style={{ textTransform: "none" }}
              onClick={() =>
                dispatch(
                  addToWishlist({
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    title: product.title,
                    price: product.price,
                    imageCover: product.imageCover,
                    state: product.state,
                  })
                )
              }
            >
              Add to Wishlist
            </Button>
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <details className="mb-4">
              <summary className="font-medium cursor-pointer">
                Product Details
              </summary>
              <p className="text-gray-600 mt-2">
                {product.details ||
                  "High-quality relaxed fit t-shirt made from premium cotton."}
              </p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">
                Delivery and Returns
              </summary>
              <p className="text-gray-600 mt-2">
                Fast delivery within 1-2 business days. Free returns within 30
                days.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Recommend />
    </>
  );
};

export default ProductPage;
