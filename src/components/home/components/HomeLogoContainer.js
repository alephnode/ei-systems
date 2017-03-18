import React from 'react'

class HomeLogoContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      animation: 'fadeIn 1s 2s forwards'
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      animation: 'fadeOut 0.5s forwards'
    })
  }

  render(){
  return (
  <div id="homeLogoContainer">
    <video playsInline autoPlay muted loop poster="" id="bgvid">
    <source src={require('../../../movies/ei_systems.mp4')} type="video/mp4" />
    </video>
    <img role="presentation" className="ei_logo img-responsive" src={require('../../../images/flat_ei.png')}/>
    <div className="scrollPrompt" style={{animation: this.state.animation}}>SCROLL TO CONTINUE<br/><i className="glyphicon glyphicon-chevron-down bounce"></i></div>
  </div>);
  }
}

export default HomeLogoContainer
