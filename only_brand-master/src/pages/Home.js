import React from 'react'
import Products from '../home/Products'
import Swipers from '../home/Swiper'
import Brands from '../components/Brands'
import Category from '../components/Category'

const Home = () => {
  return (
    <div>
      <Swipers />
      <Brands />
      <Category />
      <Products />
    </div>
  )
}

export default Home