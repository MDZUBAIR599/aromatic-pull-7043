import React from 'react'
import Slider from '../Components/Carousel/Slider'
import FeathuredVideo from './FeaturedVideos/FeaturedVideos'
function HomePage() {
  return (
    <div>
        {/* <SimpleSlider />
         */}
         <Slider/>
         <FeathuredVideo/>
    </div>
  )
}

export default HomePage