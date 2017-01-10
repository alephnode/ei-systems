import React from 'react'
import { Link } from 'react-router'
import Waypoint from 'react-waypoint'

class HomeContactContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
      visibility: 'hidden'
    }
    this._handleContactWaypointEnter = this._handleContactWaypointEnter.bind(this)
  }

  _handleContactWaypointEnter() {
    this.setState({
      opacity: 1,
      visibility: 'visible'
    })
  }

  render() {
    return(
      <div id="homeContactContainer">
        <div className="homeContactContent">
        <div className="container">
          <div className="col-md-offset-7 col-md-5 contactBlurb" style={{opacity: this.state.opacity, visibility: this.state.visibility, transition: 'all 0.75s'}}>
          <h1>Get in touch</h1>
          <p>Our technicians are certified, experienced, and extremely passionate about every project.  We take pride in building life-long relationships with our valued customers. Were ready to go to work for you!</p>
          <Link className="btn btn-primary btn-lg" id="contactHomeButton" to="/contact-us" activeClassName="active">Our Details</Link>
        </div>
        </div>
        <Waypoint bottomOffset='-20%' onEnter={this._handleContactWaypointEnter} scrollableAncestor={window} />
        </div>
      </div>
    );
  }
}

export default HomeContactContainer
