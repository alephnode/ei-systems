import React from 'react'
import { Link } from 'react-router'

const HomeAboutContainer = () =>
  <div id="homeAboutContainer">
    <div className="homeAboutContent">
      <div className="row">
        <div className="container">
        <div className="col-md-6 teamBlurb">
          <h2>Our Promise</h2>
          <p>
            Our team of seasoned technicians and reliable contractors are focused on turning upscale dreams into reality. From custom interface specialists to full-room automation experts, meet the A-team ready to deliver the setup you request.
          </p>
          <Link className="btn btn-lg" id="homeTeamButton" to="/our-team" activeClassName="active">Meet our team</Link>
        </div>
        <div className="col-md-6">
          <img className="img-responsive" role="presentation" src={require('../../../images/ei_fam.jpg')}/>
        </div>
      </div>
    </div>
    </div>
  </div>

export default HomeAboutContainer
