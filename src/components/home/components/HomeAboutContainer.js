import React from 'react'
import Waypoint from 'react-waypoint'

const styles = {
  transition: 'all 0.75s'
}

class HomeAboutContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      transform1: '',
      transform2: '',
      transform3: '',
      transform4: '',
      opacity: 0,
      visibility: 'hidden'
    }
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
  }

  _handleWaypointEnter() {
    this.setState({
      transform1: 'slideUp 1s forwards',
      transform2: 'slideUp 1s 0.2s forwards',
      transform3: 'slideUp 1s 0.4s forwards',
      transform4: 'slideUp 1s 0.6s forwards',
    })
  }

  render() {
    return (
      <div id="homeAboutContainer">
        <div className="homeAboutContent">
          <div className="container">
          <div className="row">
            <div className="col-md-12 teamBlurb">
            <h2 className="text-center">Our Promise</h2>
              <p className="text-center aboutBlurb">
                At the core of Exceptional Integrations is a set of values incorporated into every project we take on. From thorough installation plans to detailed walkthroughs and maintenance contracts, we put the customer first.
              </p>
            </div>
          </div>
          <div className="row">
          <div className="col-md-3 text-center" style={{...styles, animation: this.state.transform1, opacity: this.state.opacity, visibility: this.state.visiblity}}>
            <div className="promiseOne text-center"><i className="glyphicon glyphicon-fire"></i></div>
            <div className="clearfix"></div>
            <h4 className="promiseText text-center">Timeliness</h4>
            <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <div className="col-md-3 center" style={{...styles, animation: this.state.transform2, opacity: this.state.opacity, visibility: this.state.visiblity}}>
            <div className="promiseTwo"><i className="glyphicon glyphicon-hdd"></i></div>
              <div className="clearfix"></div>
              <h4 className="promiseText text-center">Follow-Through</h4>
              <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <div className="col-md-3 center" style={{...styles, animation: this.state.transform3, opacity: this.state.opacity, visibility: this.state.visiblity}}>
            <div className="promiseThree"><i className="glyphicon glyphicon-briefcase"></i></div>
              <div className="clearfix"></div>
              <h4 className="promiseText text-center">Ease-of-use</h4>
              <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <div className="col-md-3 center" style={{...styles, animation: this.state.transform4, opacity: this.state.opacity, visibility: this.state.visiblity}}>
            <div className="promiseFour"><i className="glyphicon glyphicon-floppy-disk"></i></div>
              <div className="clearfix"></div>
              <h4 className="promiseText text-center">Maintainable</h4>
              <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <Waypoint onEnter={this._handleWaypointEnter} scrollableAncestor={window} />
          </div>
          </div>
          </div>
        </div>
      );
    }
  }

export default HomeAboutContainer
