import React, { useState } from 'react'
import './Home.css'
import RestaurantSearch from '../../components/RestaurantSearch'
import RestaurantSearchByCategory from '../../components/RestaurantSearchByCategory'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const [first,setFirst] = useState('');
  const [second,setSecond] = useState('');
  return (
    <>
    <Navbar/>
    <div className='heroSection'>
      <div className='search-container'>
        <div className='search-box-1'>
          <RestaurantSearch />
        </div>
        <hr />
        <div className='search-box-2'>
          <RestaurantSearchByCategory/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home