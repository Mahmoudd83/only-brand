import React from "react";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa"; // استيراد الأيقونات
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer
      className="lg:block md:block p-5 sm:hidden xs:hidden">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between space-y-6 lg:space-y-0 p-8 relative z-10">
        <div className="flex flex-col items-center sm:items-start">
          <img
            className="max-w-full h-auto mb-4 w-40"
            src="/images/logo/logo white.png"
            alt="Logo"
          />
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-bold mb-3">SHOP</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/">New Arrival</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/Women">Woman</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-bold mb-3">TOP BRANDS</h4>
          <ul className="space-y-3">
            <li>Zara</li>
            <li>North Face</li>
            <li>Calvin Klein</li>
            <li>Adidas</li>
            <li>Tommy</li>
            <li>All Brands</li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-bold mb-3">TOP CATEGORIES</h4>
          <ul className="space-y-3">
            <li>Men's Clothing</li>
            <li>Men's Shoes</li>
            <li>Women's Clothing</li>
            <li>Women's Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-bold mb-3">CUSTOMER SERVICE</h4>
          <ul className="space-y-3">
            <li>Order Tracking</li>
            <li>Order Returns</li>
            <li>FAQs</li>
            <li>Payment Methods</li>
            <li>Location</li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-bold mb-3">FOLLOW US</h4>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white text-2xl hover:bg-white hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.telegram.com"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white text-2xl hover:bg-white hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white text-2xl hover:bg-white hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
