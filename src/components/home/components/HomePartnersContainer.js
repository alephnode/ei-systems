import React from 'react'
import { Link } from 'react-router'

const HomePartnersContainer = () =>
  <div id="homePartnersContainer">
    <div className="homePartnersContent col-md-6">
      <h1>Our Partners</h1>
      <Link className="btn btn-primary btn-lg" to="/our-partners" activeClassName="active">Reach out</Link>
    </div>
  </div>

export default HomePartnersContainer
