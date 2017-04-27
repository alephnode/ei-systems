import React from 'react'
import Waypoint from 'react-waypoint'

class HomePartnersContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      animationToggle: 0,
      textTransform: '',
      imgTransform: '',
      moreImgTransform: '',
      hasEntered: false
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
      hasEntered: true
    })
  }

  _handlePartnersSeeMoreClick() {
    (this.state.animationToggle % 2 == 0) ?
    this.setState({
      animationToggle: this.state.animationToggle+1,
      textTransform: 'fadeOutThenIn 5s forwards',
      imgTransform: 'moveLeftThenRight 5s forwards',
      moreImgTransform: 'fadeInLeftThenOut 5s forwards'
    }) :
    this.setState({
      animationToggle: this.state.animationToggle+1,
      textTransform: 'fadeOutThenInToggle 5s forwards',
      imgTransform: 'moveLeftThenRightToggle 5s forwards',
      moreImgTransform: 'fadeInLeftThenOutToggle 5s forwards'
    });

    console.log(this.state.animationToggle)
  }

  render() {
    let width = window.innerWidth
    if(width > 768){
      return(
        <div id="homePartnersContainer">
          <div className="container">
            <div className="homePartnersContent">
              <div className="partnersContainer" style={{animation: this.state.textTransform}}>
                <div className="col-md-2">
                  <h2>Our Partners</h2>
                </div>
                <div className="col-md-5">
                  <p className="partnersBlurb">With partnerships with top industry leaders, your installation will be the highest tier of quality with the most recent trends in technology.<br/><button onClick={this._handlePartnersSeeMoreClick} className="btn btn-lg homePartnersButton">See More</button></p>
                </div>
              </div>
          <div className="partnerLogos col-md-5" style={{animation: this.state.imgTransform}}>
            <div className="row imgRow text-center">
              <div className="col-md-5">
                <img className="img-responsive crestronLogo" alt="crestron logo" src={require('../../../images/crestron-logo-dark.png')} />
              </div>
              <div className="col-md-5">
              <img className="img-responsive lutronLogo" alt="Lutron logo" src={require('../../../images/lutron_logo.png')} />
            </div>
            </div>
            <div className="row imgRow text-center">
              <div className="col-md-6">
                <img className="img-responsive kaleidescapeLogo" alt="Kaleidescape logo" src={require('../../../images/Kaleidescape-Logo.png')} />
              </div>
              <div className="col-md-6">
                <img className="img-responsive bbbLogo" alt="BBB logo" src={require('../../../images/bbb-Logo.png')} />
            </div>
            </div>
          </div>
          <div className="partnerLogos bottomLogoRow col-md-5" style={{animation: this.state.moreImgTransform}}>
            <div className="row imgRow topLeftRow text-center">
              <div className="col-md-6">
                <img className="img-responsive bss" alt="BSS logo" src={require('../../../images/bss_logo.png')} />
              </div>
              <div className="col-md-6">
              <img className="img-responsive triadLogo" alt="Triad logo" src={require('../../../images/Triad-logo.png')} />
            </div>
            <div className="col-md-6">
            <img className="img-responsive rtiLogo" alt="RTI logo" src={require('../../../images/rtilogo.png')} />
          </div>
          <div className="col-md-6">
          <img className="img-responsive thxLogo" alt="THX logo" src={require('../../../images/thx-Logo.png')} />
        </div>
            </div>
            <div className="row imgRow lastRow text-center">
              <div className="col-md-6">
                <img className="img-responsive cediaLogo" alt="Cedia logo" src={require('../../../images/cedia-Logo.png')} />
              </div>
              <div className="col-md-6">
                <img className="img-responsive levitonLogo" alt="Leviton logo" src={require('../../../images/Leviton-logo.png')} />
            </div>
            <div className="col-md-6">
              <img className="img-responsive originLogo" alt="Origin logo" src={require('../../../images/origin-acoustics.png')} />
          </div>
            </div>
          </div>
          </div>
          </div>
          <Waypoint bottomOffset="-20%" onEnter={this._handlePartnersWaypointEnter} scrollableAncestor={window} />
        </div>
      );
    }
    else {
      return(
        <div id="homePartnersContainer">
          <div className="container">
            <div className="homePartnersMobileContent">
              <div className="partnersMobileContainer">
                <div className="col-xs-12">
                  <h2>Our Partners</h2>
                </div>
                <div className="col-xs-10 col-xs-offset-1">
                  <p className="partnersMobileBlurb">With partnerships with top industry leaders, your installation will be the highest tier of quality with the most recent trends in technology.<br/><button onClick={this._handlePartnersSeeMoreClick} className="btn btn-lg homePartnersButton">See More</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HomePartnersContainer
