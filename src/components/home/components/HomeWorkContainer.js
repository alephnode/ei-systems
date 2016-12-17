import React from 'react'
import { Link } from 'react-router'

const HomeWorkContainer = () =>
  <div id="homeWorkContainer">
    <div className="homeWorkContent">
      <div className="row">
        <div className="container">
        <div className="col-md-6">test</div>
        <div className="col-md-6">
          <p>
            Exceptional Integrations is a full-service residential and commercial custom electronics and design integration firm. Our primary goal is to make your home or business systems, safe, elegant, fun and easy to use. Our team is comprised of world-class experts in every field whose number one priority is to provide the best products and services to our clients no matter how big or small the job is.
          </p>
          <Link className="btn btn-primary btn-lg" to="/our-work" activeClassName="active">See More</Link>
        </div>
        </div>
    </div>
  </div>
  </div>

export default HomeWorkContainer
