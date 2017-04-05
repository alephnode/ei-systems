import React from 'react'
import Slider from 'react-slick'

const settings = {
  autoplay: true,
  autoplaySpeed: 9000,
  infinite: true,
  fade: true
};

const WorkTestimonialCarousel = () =>
  <div id="workTestimonialCarouselContainer">
    <Slider {...settings}>
      <div className="workTestimonialPhoto" id="carouselOne">
        <div className="testimonialCarouselCard">
          <p className="testimonial">“My complements to the entire team at Exceptional Integrations. It’s
      evident that their work is not only their everyday activity but their passion no matter
      how big or small the task is. I will use their services for the rest of my life&quot;</p><br/><div className="attribution text-right">- John Stevens Sr.</div>
        </div>
      </div>
      <div className="workTestimonialPhoto" id="carouselTwo">
        <div className="testimonialCarouselCard">
          <p className="testimonial">“Exceptional Integrations has proven that they not only provide the
      very best products, but they offer the very best service as well. We look forward to
      working with you again and again.&quot;</p> <br/><div className="attribution text-right">- Joseph Szabo - Direct Buy Service Manager</div>
        </div>
      </div>
      <div className="workTestimonialPhoto" id="carouselThree">
        <div className="testimonialCarouselCard">
          <p className="testimonial">“Exceptional Integrations biggest value is after the installation. They are responsive and ensure complete satisfaction months after the sale. They stand
      behind what they install.&quot;</p><br/><div className="attribution text-right">- Nabil Sakab - Procter &amp; Gamble R&amp;D Senior Vice President</div>
        </div>
      </div>
      <div className="workTestimonialPhoto" id="carouselFour">
        <div className="testimonialCarouselCard">
          <p className="testimonial">“It’s rare to see a company that will go above and beyond their call
      of duty to ensure complete customer satisfaction as Exceptional Integrations. Thank you
      for taking care of me whether is 2 in the afternoon or 2 in the morning!!!&quot;</p><br/><div className="attribution text-right">- Francisco Armendariz</div>
        </div>
      </div>
      <div className="workTestimonialPhoto" id="carouselFive">
        <div className="testimonialCarouselCard">
          <p className="testimonial">“Anybody can hook up electronics, but knowing how, why and make
      all work together so easily takes a professional from Exceptional Integrations. From start
      to finish they know how to get the job done&quot;</p><br/><div className="attribution text-right">- Richard Stavanotsky</div>
        </div>
      </div>
      <div className="workTestimonialPhoto" id="carouselSix">
        <div className="testimonialCarouselCard">
          <p className="testimonial">“Exceptional Integrations offers personal ongoing and timely
      service, something most companies do not. I highly recommend Exceptional
      Integrations for Crestron installation and follow-up service.”</p><br/><div className="attribution text-right">– K.R. at Enclave Court</div>
        </div>
      </div>
    </Slider>
  </div>

export default WorkTestimonialCarousel
