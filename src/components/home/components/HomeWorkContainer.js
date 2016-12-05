import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const HomeWorkContainer = () =>
  <div id="homeWorkContainer">
    <div className="homeWorkContent">
      <h1>Our Work</h1>
      <Link className="btn btn-primary btn-lg" to="/our-work" activeClassName="active">See More</Link>
    </div>
  </div>

export default HomeWorkContainer
