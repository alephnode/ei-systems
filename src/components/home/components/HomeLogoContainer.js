import React from 'react'

const HomeLogoContainer = () => {
  return (
    <div id="homeLogoContainer">
      <video playsInline autoPlay muted loop poster="" id="bgvid">
      <source src={require('../../../movies/ei_systems_new.mp4')} type="video/mp4" />
      </video>
      <img role="presentation" className="ei_logo img-responsive" src={require('../../../images/flat_ei.png')}/>
      <div className="scrollPrompt">SCROLL TO CONTINUE<br/><i className="glyphicon glyphicon-chevron-down bounce"></i></div>
    </div>
  );
}

export default HomeLogoContainer
