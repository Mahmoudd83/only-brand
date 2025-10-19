import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useMediaQuery } from 'react-responsive';

const Style = () => {
  const styles = [
    { id: 1, title: "Casual", img: "/images/products/image 59.png" },
    { id: 2, title: "Classic", img: "/images/products/image 56.png" },
    { id: 3, title: "Basics", img: "/images/products/image 24.png" },
    { id: 4, title: "Don't Waste Time", img: "/images/products/image 63.png" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });
  const itemsToShow = isMobile ? 2 : isTablet ? 3 : 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % styles.length);
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - itemsToShow + styles.length) % styles.length
    );
  };

  const visibleItems = styles
    .slice(currentIndex, currentIndex + itemsToShow)
    .concat(
      styles.slice(0, Math.max(0, currentIndex + itemsToShow - styles.length))
    );

  return (
    <section className="py-10 px-4" style={{ backgroundColor: "#E6E6E6" }}>
      <h2 className="text-center text-2xl font-semibold mb-8">Shop By Style</h2>

      {/* سلايدر يظهر فقط في الموبايل ويكون الأسهم تحت السلايدر */}
      <div className="block md:hidden">
        <div className="sm:flex xs:flex md:hidden lg:hidden flex flex-col items-center justify-center mt-8 w-full p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className={`grid gap-4 ${
                isMobile
                  ? 'grid-cols-2'
                  : isTablet
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              } w-full`}
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.id + index}
                  className="p-4 bg-gray-50 rounded-md flex flex-col items-center relative"
                >
                  <img
                    src={item.img}
                    alt={item.type}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p className="text-gray-900 font-bold">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* الأزرار */}
          <div className="flex justify-between items-center mt-6 w-full">
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
      </div>

      {/* هذا الجزء يعرض البطاقات في التابلت والشاشات الأكبر */}
      <div className="sm:hidden xs:hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {styles.map((style) => (
          <motion.div
            key={style.id}
            className="rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={style.img}
              alt={style.title}
              className="mx-auto mb-4 rounded-md bg-white"
            />
            <p className="text-lg font-medium">{style.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Style;
