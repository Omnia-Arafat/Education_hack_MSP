import React from 'react'
import homeImage from '../../assets/Image/home.webp'
const Home = () => {
  return (
    <div className='home-page'>
      <div> <img src={homeImage} alt="" srcset=""  className='home-img'/></div>
      <div className='welc-txt'> Welcome , Omnia To Your education platform</div>
    </div>
  )
}

export default Home
