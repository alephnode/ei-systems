import React from 'react'
import Waypoint from 'react-waypoint'

class HomePartnersContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      textTransform: '',
      imgTransition: '',
      opacity: 0,
      visibility: 'hidden'
    }
    this._handlePartnersWaypointEnter = this._handlePartnersWaypointEnter.bind(this)
  }

  _handlePartnersWaypointEnter() {
    this.setState({
      textTransform: 'slideInLeft 1s forwards',
      imgTransition: 'all 0.75s 0.2s',
      opacity: 1,
      visibility: 'visible'
    })
  }

  render() {
    return(
      <div id="homePartnersContainer">
        <div className="container">
        <div className="homePartnersContent">
        <div className="col-md-4 partnersContainer" style={{animation: this.state.textTransform}}>
          <h1>Our Partners</h1>
          <p className="partnersBlurb">With partnerships with the industry's leading companies, your installation will be the highest tier of quality with the most recent trends in technology.</p>
        </div>
        <div className="partnerLogos col-md-8" style={{transition: this.state.imgTransition,
                                                       opacity: this.state.opacity,
                                                       visibility: this.state.visibility}}>
          <div className="row text-center">
            <img className="img-responsive crestronLogo" alt="crestron logo" src={require('../../../images/crestron-logo-dark.png')} />
            <img className="img-responsive triadLogo" alt="Triad logo" src={require('../../../images/Triad-logo.png')} />
          </div>
          <div className="row text-center">
            <img className="img-responsive kaleidescapeLogo" alt="Kaleidescape logo" src={require('../../../images/Kaleidescape-Logo.png')} />
            <img className="img-responsive lutronLogo" alt="Lutron logo" src={require('../../../images/lutron_logo.png')} />
          </div>
        </div>
        </div>
        </div>
        <Waypoint onEnter={this._handlePartnersWaypointEnter} scrollableAncestor={window} />
      </div>
    );
  }
}

export default HomePartnersContainer
