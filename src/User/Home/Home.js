import React from 'react'
import Slider from '../../commponents/common/slider/Slider'
import CatSlider from '../../commponents/common/catSlider/CatSlider'

const Home = () => {
  return (
    <>
      <div className='slider'>
        <Slider/>
        <CatSlider/>
      </div>
    </>
  )
}

export default Home
