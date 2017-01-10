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
          <div className="contactBlurb" style={{opacity: this.state.opacity, visibility: this.state.visibility, transition: 'all 0.75s'}}>
          <div className="homeContactLede col-md-offset-5 col-md-2">
            <h2>Our<br/>Details</h2>
          </div>
          <div className="col-md-5">
          <p className="homeContactBlurb">Our technicians are certified, experienced, and extremely passionate about every project.  We take pride in building life-long relationships with our valued customers. Were ready to go to work for you!</p>
          <Link className="btn btn-primary btn-lg" id="contactHomeButton" to="/contact-us" activeClassName="active">Get in Touch</Link>
          </div>
        </div>
        </div>
        <Waypoint bottomOffset='-20%' onEnter={this._handleContactWaypointEnter} scrollableAncestor={window} />
        </div>
      </div>
    );
  }
}

export default HomeContactContainer
