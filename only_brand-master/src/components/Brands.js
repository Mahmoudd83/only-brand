import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px 0", margin: "60px 0"}}>
      <h2 style={{ 
        margin: '40px 0 25px 0',
        color: 'var(--Text-Main-Text, #1E1E1E)',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: 'normal'
      }} className="text-5xl md:text-2xl sm:text-xl xs:text-xl font-bold">FEEL CONFIDENT AND BEAUTIFUL IN EVERY OUTFIT</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        loop={true} // التكرار اللانهائي
        autoplay={{
          delay: 1000, // التأخير بين الشرائح 1.5 ثانية
          disableOnInteraction: false, // التكرار مستمر حتى مع تفاعل المستخدم
        }}
        breakpoints={{
          320: {
            slidesPerView: 3, // عدد العناصر المعروضة على الشاشات الصغيرة
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4, // عدد العناصر على الشاشات المتوسطة
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5, // عدد العناصر على الأجهزة اللوحية
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6, // عدد العناصر على الشاشات الكبيرة
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
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 15.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 15.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 13.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 13.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 14.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 14.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 16.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 16.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 17.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 17.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 18.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 18.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 19.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 19.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 47.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 47.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 57.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 57.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 66.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 66.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#E6E6E6"
          }}
        >
          <img src="/images/brand/image 67.png" width={150} className="lg:flex md:flex sm:hidden xs:hidden" alt="Brand 3" />
          <img src="/images/brand/image 67.png" width={100} className="lg:hidden md:hidden sm:flex xs:flex" alt="Brand 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Brands;