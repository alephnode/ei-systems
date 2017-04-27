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
      transform4: ''
    }
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
  }

  _handleWaypointEnter() {
    this.setState({
      transform1: 'slideUp 1s 0.5s forwards',
      transform2: 'slideUp 1s 0.7s forwards',
      transform3: 'slideUp 1s 0.9s forwards',
      transform4: 'slideUp 1s 1.1s forwards',
    })
  }

  render() {
    let width = window.innerWidth
    return (
      <div id="homeAboutContainer">
        <div className="homeAboutContent">
          <div className="container">
          <div className="row promiseTop">
            <div className="teamBlurb">
            <div className="col-md-2 col-md-offset-2">
            <h2>Our Promise</h2>
            </div>
            <div className="col-md-6">
              <p className="aboutBlurb">
                At the core of Exceptional Integrations is a set of values incorporated into every project we take on. From thorough installation plans to detailed walkthroughs and maintenance contracts, we put the customer first.
              </p>
            </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-3 promiseContainer text-center" style={{...styles, animation: this.state.transform1}}>
            <div className="promiseOne text-center"><i className="glyphicon glyphicon-fire"></i></div>
            <div className="clearfix"></div>
            <h4 className="promiseText text-center">Timeliness</h4>
            <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <div className="col-md-3 promiseContainer center" style={{...styles, animation: this.state.transform2}}>
            <div className="promiseTwo"><i className="glyphicon glyphicon-hdd"></i></div>
              <div className="clearfix"></div>
              <h4 className="promiseText text-center">Follow-Through</h4>
              <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <div className="col-md-3 promiseContainer center" style={{...styles, animation: this.state.transform3}}>
            <div className="promiseThree"><i className="glyphicon glyphicon-briefcase"></i></div>
              <div className="clearfix"></div>
              <h4 className="promiseText text-center">Ease-of-use</h4>
              <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          <div className="col-md-3 promiseContainer center" style={{...styles, animation: this.state.transform4}}>
            <div className="promiseFour"><i className="glyphicon glyphicon-floppy-disk"></i></div>
              <div className="clearfix"></div>
              <h4 className="promiseText text-center">Maintainable</h4>
              <p className="promiseText">Praesent vestibulum cursus metus, eu maximus quam. Fusce vehicula a ligula vitae luctus. Suspendisse finibus nulla ut nisl suscipit, nec pellentesque ex dignissim. </p>
          </div>
          { width > 768  ? (
            <Waypoint onEnter={this._handleWaypointEnter} scrollableAncestor={window} />
            ) : (
              ''
          )}
          </div>
          </div>
          </div>
        </div>
      );
    }
  }

export default HomeAboutContainer
