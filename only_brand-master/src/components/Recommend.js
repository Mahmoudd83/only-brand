import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link, useLoaderData } from "react-router-dom";
import { addToWishlist } from "../Redux/OnlyBrandSlice";
import { useDispatch } from "react-redux";

const Recommend = () => {
  const data = useLoaderData();
  const ProductsData = data.data;
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  // إدارة حالة الأيقونات المحبوبة لكل بطاقة
  const [likedItems, setLikedItems] = useState({}); // مفتاح `id` يحمل حالة كل عنصر

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const itemsToShow = isMobile ? 2 : isTablet ? 3 : 5;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsToShow) % ProductsData.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsToShow + ProductsData.length) % ProductsData.length
    );
  };

  const visibleItems = ProductsData.slice(
    currentIndex,
    currentIndex + itemsToShow
  ).concat(
    ProductsData.slice(
      0,
      Math.max(0, currentIndex + itemsToShow - ProductsData.length)
    )
  );

  // تغيير حالة الإعجاب عند النقر
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
    <>
      <h2 className="text-2xl font-bold m-8 ">Recommended For You</h2>
    <div className="flex flex-col items-center justify-center mt-8 w-full p-4">
      {/* البطاقات */}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className={`grid gap-4 ${
            isMobile
              ? "grid-cols-2"
              : isTablet
              ? "grid-cols-3"
              : "grid-cols-5"
          } w-full`}
        >
          {visibleItems.map((item) => (
            <motion.div
              key={item.id}
              className="p-4 rounded-md flex flex-col items-center relative"
              style={{ backgroundColor: "#E6E6E6" }}
            >
              {/* أيقونة القلب */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => {
                  toggleLike(item.id);
                  dispatch(addToWishlist(
                    {
                      id: item.id,
                      name: item.name,
                      description: item.description,
                      brand: item.brand,
                      title: item.title,
                      price: item.price,
                      imageCover: item.imageCover,
                      state: item.state,
                    },
                  ));
                }}
              >
                {likedItems[item.id] ? (
                  <FavoriteIcon className="text-red-500" />
                ) : (
                  <FavoriteBorderIcon className="text-gray-500" />
                )}
              </div>
              {/* محتوى البطاقة بالكامل كزر */}
              <Link
                to={{
                  pathname: `/product/${item.id}`,
                }}
                state={{ product: item }} // إرسال بيانات المنتج إلى الصفحة
                className="flex flex-col items-center w-full"
              >
                <img
                  src={item.imageCover}
                  alt={item.type}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="font-semibold text-lg mt-2">{item.brand}</h3>
                <p className="text-gray-500">{item.type}</p>
                <p className="text-gray-900 font-bold">{item.price}</p>
                <p className="text-green-500 text-sm">Free Delivery</p>
                <p className="font-bold mt-1">
                  GET IT <span className="bg-red-500 italic">TOMORROW</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* الأزرار */}
      <div className="flex justify-between items-center mt-6 mb-10 w-full">
        <button
          onClick={handlePrevious}
          className="text-white bg-gray-800 py-2 px-4 rounded-full transition duration-300"
        >
          <ArrowCircleLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-gray-800 py-2 px-4 rounded-full transition duration-300"
        >
          <ArrowCircleRightIcon />
        </button>
      </div>
      </div>
      </>
  );
};

export default Recommend;
