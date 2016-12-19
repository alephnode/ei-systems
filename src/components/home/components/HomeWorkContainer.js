import React from 'react'
import { Link } from 'react-router'
import Waypoint from 'react-waypoint'

class HomeWorkContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      fade: false
    }
  }

  _handleWaypointEnter() {
    this.setState({
      fade: true
    })
  }

  render() {
    let componentState = this.state.fade ? 'fadeInComponent' : 'fadedComponent'
    return (
      <div id="homeWorkContainer">
        <div className="homeWorkContent">
          <div className="row">
            <div className="container" id={componentState}>
            <div className="col-md-6">
              <img className="img-responsive" role="presentation" src={require('../../../images/lifestyle-project-sample-006.jpeg')}/>
            </div>
            <div className="col-md-6 workBlurb">
              <h2>Our work speaks for itself.</h2>
                <p>
                  Exceptional Integrations is a full-service residential and commercial custom electronics and design integration firm. Our primary goal is to make your home or business systems, safe, elegant, fun and easy to use. Our team is comprised of world-class experts in every field whose number one priority is to provide the best products and services to our clients no matter how big or small the job is.
                </p>
              <Link className="btn btn-lg homeWorkButton" to="/our-work" activeClassName="active">Explore our work</Link>
            </div>
            </div>
            <Waypoint onEnter={this._handleWaypointEnter} />
        </div>
      </div>
      </div>
    );
  }
}

export default HomeWorkContainer
