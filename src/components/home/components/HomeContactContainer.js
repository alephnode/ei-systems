import React from 'react'
import { Link } from 'react-router'

const HomeContactContainer = () =>
  <div id="homeContactContainer">
    <div className="homeContactContent">
      <h1>Contact Us</h1>
      <Link className="btn btn-primary btn-lg" to="/contact-us" activeClassName="active">Reach out</Link>
    </div>
  </div>

export default HomeContactContainer
