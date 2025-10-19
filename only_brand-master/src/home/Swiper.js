import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css"; // ملف CSS للتنسيقات

const Swipers = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className="slide-content">
        <img
            src="/images/homeslide/image.png"
            alt="Calvin Klein"
            className="slide-image lg:flex md:flex sm:hidden xs:hidden"
          />
          <img
            src="/images/homeslide/image.jpg"
            alt="Calvin Klein"
            className="slide-image lg:hidden md:hidden sm:flex xs:flex"
            width={400}
          />
          <div className="slide-overlay">
            <button className="shop-now-btn bg-gray-900 text-white">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
        <img
            src="/images/homeslide/image 11.png"
            alt="Calvin Klein"
            className="slide-image lg:flex md:flex sm:hidden xs:hidden"
          />
          <img
            src="/images/homeslide/image 11.jpg"
            alt="Calvin Klein"
            className="slide-image lg:hidden md:hidden sm:flex xs:flex"
            width={400}
          />
          <div className="slide-overlay">
            <button className="shop-now-btn bg-white">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
        <img
            src="/images/homeslide/image 4.png"
            alt="Calvin Klein"
            className="slide-image lg:flex md:flex sm:hidden xs:hidden"
          />
          <img
            src="/images/homeslide/image 4.jpg"
            alt="Calvin Klein"
            className="slide-image lg:hidden md:hidden sm:flex xs:flex"
            width={400}
          />
          <div className="slide-overlay">
            <button className="shop-now-btn bg-white text-red-600">SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
        <img
            src="/images/homeslide/image 7.png"
            alt="Calvin Klein"
            className="slide-image lg:flex md:flex sm:hidden xs:hidden"
          />
          <img
            src="/images/homeslide/image 7.jpg"
            alt="Calvin Klein"
            className="slide-image lg:hidden md:hidden sm:flex xs:flex"
            width={400}
          />
          <div className="slide-overlay">
            <button className="shop-now-btn text-white" style={{backgroundColor: '#862d24'}}>SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img
            src="/images/homeslide/image 8.png"
            alt="Calvin Klein"
            className="slide-image lg:flex md:flex sm:hidden xs:hidden"
          />
          <img
            src="/images/homeslide/image 8.jpg"
            alt="Calvin Klein"
            className="slide-image lg:hidden md:hidden sm:flex xs:flex"
            width={400}
          />
          <div className="slide-overlay">
            <button className="shop-now-btn text-white" style={{backgroundColor: '#3b423b'}}>SHOP NOW</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
