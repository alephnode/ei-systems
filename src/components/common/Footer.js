import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
      <div className="container-fluid" id="footerContainer">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Footer</a>
        </div>
        <div className="nav navbar-nav nav-center">
          <a>Facebook</a><br/>
          <a>Twitter</a><br/>
          <a>Instagram</a><br/>
          <a>Snapchat</a><br/>
        </div>
        <div className="nav navbar-nav navbar-right">
          <Link to="/our-work" activeClassName="active">Our Work</Link>
            <br/>
          <Link to="/our-team" activeClassName="active">Our Team</Link>
            <br/>
          <Link to="/contact-us" activeClassName="active">Contact Us</Link>
        </div>
      </div>
  );
}

export default Footer
