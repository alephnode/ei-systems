import React from 'react'
import { Link } from 'react-router'
import Waypoint from 'react-waypoint'

const styles = {
  transition: 'all 0.5s'
}

class HomeWorkContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      opacity: 0,
      visibility: 'hidden'
    }
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
  }

  _handleWaypointEnter() {
    this.setState({
      opacity: 1,
      visibility: 'visible'
    })
  }

  render() {
    return (
      <div id="homeWorkContainer">
        <div className="homeWorkContent">
          <div className="row">
            <div className="container" style={{...styles, opacity: this.state.opacity, visibility: this.state.visiblity}}>
            <div className="col-md-12 workBlurb">
              <h2>Our Process</h2>
                <p>
                  Exceptional Integrations is a full-service residential and commercial custom electronics and design integration firm. Our primary goal is to make your home or business systems, safe, elegant, fun and easy to use. Our team is comprised of world-class experts in every field whose number one priority is to provide the best products and services to our clients no matter how big or small the job is.
                </p>
              <Link className="btn btn-lg homeWorkButton" to="/our-work" activeClassName="active">Explore our work</Link>
            </div>
            </div>
            <Waypoint onEnter={this._handleWaypointEnter} scrollableAncestor={window} />
        </div>
      </div>
      </div>
    );
  }
}

export default HomeWorkContainer
