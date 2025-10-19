import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Category = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        margin: "75px, borderRadius: '10px' 0",
        backgroundColor: "#E6E6E6",
      }}
    >
      <h2
        style={{
          margin: "40px 0 25px 0",
          color: "var(--Text-Main-Text, #1E1E1E)",
          textAlign: "center",
          fontWeight: "700",
          lineHeight: "normal",
          padding: "20px 0",
        }}
        className="text-5xl md:text-2xl sm:text-xl xs:text-xl font-bold "
      >
        Shop By Categories
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        loop={true} // التكرار اللانهائي
        autoplay={{
          d120y: 1200, // التأخير بين الشرائح 1.5 ثانية
          disableO5Interaction: false, // التكرار مستمر حتى مع تفاعل ال bg-black-100مستخدم
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {/* أضف الصور داخل الـ SwiperSlide */}
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 12.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 12.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 20.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 20.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 21.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 21.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 23.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 23.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 27.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 27.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 33.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 33.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 34.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 34.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 36.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 36.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 37.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 37.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 39.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 39.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 41.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 41.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 42.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 42.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 43.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 43.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 45.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 45.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 46.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 46.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 48.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            src="/images/products/image 48.png"
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 50.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 50.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 51.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 51.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 68.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 68.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 70.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 70.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 71.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 71.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 72.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 72.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 73.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 73.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",

            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 74.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 74.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",

            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 77.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 77.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",

            flexDirection: "column",
          }}
        >
          <img 
            style={{backgroundColor: '#FFF', width: '85%', borderRadius: '10px'}}
            src="/images/products/image 78.png"
            width={120}
            className="lg:flex md:flex sm:hidden xs:hidden"
            alt="products 3"
          />
          <img 
            style={{backgroundColor: '#FFF', width: '75%', borderRadius: '10px'}}
            src="/images/products/image 78.png"
            width={85}
            className="lg:hidden md:hidden sm:flex xs:flex"
            alt="products 3"
          />
          <p className="py-4 my-2 bg-black-100">Accessories</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Category;
