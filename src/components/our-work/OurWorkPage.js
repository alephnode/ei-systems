import React from 'react'
import WorkLiveContainer from './components/WorkLiveContainer'
import WorkSpotlightContainer from './components/WorkSpotlightContainer'
import WorkTestimonialCarousel from './components/WorkTestimonialCarousel'
import WorkTestimonialLede from './components/WorkTestimonialLede'
import WorkFooter from './components/WorkFooter'

const OurWorkPage = () =>
  <div>
    <WorkSpotlightContainer />
    <WorkLiveContainer />
    <WorkTestimonialLede />
    <WorkTestimonialCarousel />
    <WorkFooter />
  </div>

export default OurWorkPage
