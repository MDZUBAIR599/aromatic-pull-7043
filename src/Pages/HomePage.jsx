import React from 'react'
import Slider from '../Components/Carousel/Slider'
import FeathuredVideo from './FeaturedVideos/FeaturedVideos'
import HomeNews from './HomeNews'
function HomePage() {
  return (
    <div>
        {/* <SimpleSlider />
         */}
         <Slider/>
         <FeathuredVideo/>
         <HomeNews/>
    </div>
  )
}

export default HomePage