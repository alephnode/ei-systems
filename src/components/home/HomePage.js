import React from 'react'
import HomeLogoContainer from './components/HomeLogoContainer'
import HomeWorkContainer from './components/HomeWorkContainer'
import HomeAboutContainer from './components/HomeAboutContainer'
import HomeContactContainer from './components/HomeContactContainer'
import Waypoint from 'react-waypoint'

class HomePage extends React.Component {

  _handleWaypointEnter() {
  }

  render() {
    return(
  <div id="homeContainer">
    <HomeLogoContainer />
    <HomeWorkContainer />
      <Waypoint onEnter={this._handleWaypointEnter} />
    <HomeAboutContainer />
    <HomeContactContainer />
  </div>
);
}
}

export default HomePage
