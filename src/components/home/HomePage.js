import React from 'react'
import HomeLogoContainer from './components/HomeLogoContainer'
import HomeWorkContainer from './components/HomeWorkContainer'
import HomeAboutContainer from './components/HomeAboutContainer'
import HomePartnersContainer from './components/HomePartnersContainer'
import HomeContactContainer from './components/HomeContactContainer'
import HomeFooter from './components/HomeFooter'

class HomePage extends React.Component {

  render() {
    return(
  <div id="homeContainer">
    <HomeLogoContainer />
    <HomeWorkContainer />
    <HomeAboutContainer />
    <HomePartnersContainer />
    <HomeContactContainer />
    <HomeFooter />
  </div>
);
}
}

export default HomePage
