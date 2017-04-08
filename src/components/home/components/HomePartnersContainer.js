import React from 'react'
import Waypoint from 'react-waypoint'

class HomePartnersContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      textTransform: '',
      imgTransform: '',
      imgTransition: '',
      opacity: 0,
      visibility: 'hidden',
      bottomLogoShow: 'none',
      hasEntered: false,
    }
    this._handlePartnersWaypointEnter = this._handlePartnersWaypointEnter.bind(this)
    this._handlePartnersSeeMoreClick = this._handlePartnersSeeMoreClick.bind(this)
  }

  _handlePartnersWaypointEnter() {

    if(this.state.hasEntered) {
      return
    }

    this.setState({
      textTransform: 'fadeIn 1s forwards',
      imgTransition: 'all 0.75s 0.2s',
      opacity: 1,
      visibility: 'visible',
      hasEntered: true
    })
  }

  _handlePartnersSeeMoreClick() {
    this.setState({
      textTransform: 'fadeOutUp 0.25s forwards',
      imgTransition: 'all 0.75s 0.2s',
      imgTransform: 'moveUp 0.5s forwards',
      bottomLogoShow: 'block'
    })
  }

  render() {
    return(
      <div id="homePartnersContainer">
        <div className="container">
          <div className="homePartnersContent">
            <div className="container partnersContainer" style={{animation: this.state.textTransform}}>
              <div className="row">
              <div className="col-md-2 workBlurb">
                <h2>Our Partners</h2>
              </div>
              <div className="col-xs-10 workBlurb workBlurbGraph">
                <p className="partnersBlurb">With partnerships with top industry leaders, your installation will be the highest tier of quality with the most recent trends in technology.</p>
                <button onClick={this._handlePartnersSeeMoreClick} className="btn btn-lg homePartnersButton">See More</button>
              </div>
              </div>
            </div>
        <div className="partnerLogos col-xs-12">
          <div className="row topLogoRow text-center" style={{animation: this.state.imgTransform}}>
            <div className="col-md-3">
              <img className="img-responsive crestronLogo" alt="crestron logo" src={require('../../../images/crestron-logo-dark.png')} />
            </div>
            <div className="col-md-3">
              <img className="img-responsive lutronLogo" alt="Lutron logo" src={require('../../../images/lutron_logo.png')} />
            </div>
            <div className="col-md-3">
              <img className="img-responsive kaleidescapeLogo" alt="Kaleidescape logo" src={require('../../../images/Kaleidescape-Logo.png')} />
            </div>
            <div className="col-md-3">
              <img className="img-responsive bbbLogo" alt="bbb logo" src={require('../../../images/bbb-Logo.png')} />
            </div>
          </div>
          <div className="row bottomLogoRow text-center" style={{display: this.state.bottomLogoShow, animation: this.state.imgTransform}}>
            <div className="col-md-3">
              <img className="img-responsive triadLogo" alt="Triad logo" src={require('../../../images/Triad-logo.png')} />
            </div>
            <div className="col-md-3">
              <img className="img-responsive cediaLogo" alt="Cedia logo" src={require('../../../images/cedia-Logo.png')} />
            </div>
            <div className="col-md-3">
              <img className="img-responsive rtiLogo" alt="RTI logo" src={require('../../../images/rtilogo.png')} />
            </div>
            <div className="col-md-3">
              <img className="img-responsive levitonLogo" alt="Leviton logo" src={require('../../../images/Leviton-logo.png')} />
            </div>
          </div>
          <Waypoint bottomOffset="-40%" onEnter={this._handlePartnersWaypointEnter} scrollableAncestor={window} />
          <div className="row bottomLogoRow mostBottom text-center" style={{display: this.state.bottomLogoShow, animation: this.state.imgTransform}}>
            <div className="col-md-4 col-md-offset-2">
              <img className="img-responsive originLogo" alt="Origin Acoustics logo" src={require('../../../images/origin-acoustics.png')} />
            </div>
            <div className="col-md-4 col-md-offset-1">
              <img className="img-responsive bssLogo" alt="bss logo" src={require('../../../images/bss_logo.png')} />
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default HomePartnersContainer
