import React from 'react'
import { Link } from 'react-router'

const HomeContactContainer = () =>
  <div id="homeContactContainer">
    <div className="homeContactContent col-md-offset-6 col-md-6">
      <h1>Contact Us</h1>
      <Link className="btn btn-primary btn-lg" id="contactHomeButton" to="/contact-us" activeClassName="active">Reach out</Link>
    </div>
  </div>

export default HomeContactContainer
