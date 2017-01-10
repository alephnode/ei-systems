import React from 'react'

class HomeLogoContainer extends React.Component {
  render(){
  return (
  <div id="homeLogoContainer">
    <img role="presentation" className="ei_logo img-responsive" src={require('../../../images/flat_ei.png')}/>
  </div>);
  }
}

export default HomeLogoContainer
