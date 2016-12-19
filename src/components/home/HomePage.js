import React from 'react'
import HomeLogoContainer from './components/HomeLogoContainer'
import HomeWorkContainer from './components/HomeWorkContainer'
import HomeAboutContainer from './components/HomeAboutContainer'
import HomeContactContainer from './components/HomeContactContainer'

class HomePage extends React.Component {

  render() {
    return(
  <div id="homeContainer">
    <HomeLogoContainer />
    <HomeWorkContainer />
    <HomeAboutContainer />
    <HomeContactContainer />
  </div>
);
}
}

export default HomePage
