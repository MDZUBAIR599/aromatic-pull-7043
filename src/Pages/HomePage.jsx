import React from 'react'
import SimpleSlider from '../Components/Carousel/CarouselSlider'
import CarouselSlider from '../Components/Carousel/CarouselSlider'
import Slider from '../Components/Carousel/Slider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
  return (
    <div>
        {/* <SimpleSlider />
         */}
         <Slider/>
    </div>
  )
}

export default HomePage