import React from 'react'
import Slider from '../Components/Carousel/Slider'
import Footer from '../Components/Fotter/Footer'
import DataDigest from './DataDigest/DataDigest'
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
         <DataDigest/>
         <Footer/>
    </div>
  )
}

export default HomePage