import React from 'react'
import { Link } from 'react-router'

const HomeAboutContainer = () =>
  <div id="homeAboutContainer">
    <div className="homeAboutContent">
      <h1>Our Team</h1>
      <Link className="btn btn-primary btn-lg" to="/our-team" activeClassName="active">Meet the team</Link>
    </div>
  </div>

export default HomeAboutContainer
