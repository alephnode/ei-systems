import React from 'react'
import { Link } from 'react-router'

const HomeContactContainer = () =>
  <div id="homeContactContainer">
    <div className="homeContactContent">
    <div className="container">
      <div className="col-md-offset-7 col-md-5 contactBlurb">
      <h1>We're here to help</h1>
      <p>Our technicians are certified, experienced, and extremely passionate about every project.  We take pride in building life-long relationships with our valued customers. We're ready to go to work for you!</p>
      <Link className="btn btn-primary btn-lg" id="contactHomeButton" to="/contact-us" activeClassName="active">Reach out</Link>
    </div>
    </div>
    </div>
  </div>

export default HomeContactContainer
