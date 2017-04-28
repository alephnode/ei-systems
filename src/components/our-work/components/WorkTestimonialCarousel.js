import React from 'react'
import testimonials from '../../../testimonials/testimonials'

class WorkTestimonialCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      author: '',
      count: 0,
      slideFade: ''
    }
    this._updateSlider = this._updateSlider.bind(this)
  }

  componentDidMount() {
    this._updateSlider()
    this.interval = setInterval(this._updateSlider, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _updateSlider() {

      if(this.state.count === testimonials.length)
        this.state.count = 0

        if(this.state.count % 2 === 0) {
          this.setState({
            text: testimonials[this.state.count].text,
            author: testimonials[this.state.count].author,
            slideFade: 'fadeInRightThenOutLeft 7s forwards',
            count: this.state.count + 1
          })
        }
        else {
          this.setState({
            text: testimonials[this.state.count].text,
            author: testimonials[this.state.count].author,
            slideFade: 'fadeInRightThenOutLeftToggle 7s forwards',
            count: this.state.count + 1
          })
        }
  }

  render() {
    return(
      <div id="workTestimonialCarouselContainer">
          <div className="workTestimonialPhoto">
            <div className="testimonialCarouselCard" style={{animation: this.state.slideFade}}>
              <p className="testimonial">{this.state.text}</p><br/><div className="attribution text-right"> – {this.state.author}</div>
            </div>
          </div>
      </div>
    );
  }
}
export default WorkTestimonialCarousel
