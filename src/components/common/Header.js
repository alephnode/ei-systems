import React from 'react'
import { Link } from 'react-router'
import { SocialIcon } from 'react-social-icons'

const headerStyles = {
  width: "35px",
  height: "35px",
  marginRight: "15px"
}

class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    console.log('mounted');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.log('unmounted');
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      scrolled: true
    })
  }

  render(){
  let navState = this.state.scrolled ? 'displayNav' : 'mainNav'
  return (
    <nav className="navbar navbar-default navbar-fixed-top" id={navState}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand " id="siteLogo" href="/"><img role="presentation" src={require('../../images/flat_ei_nav.png')} /></a>
        </div>
        <div className="nav navbar-nav navbar-right" id="headerNavLinks">
          <Link to="/our-work" activeClassName="active">Work</Link>
          <Link to="/our-team" activeClassName="active">Team</Link>
          <Link to="/contact-us" activeClassName="active">Contact</Link>
          <span className="navSep">{" | "}</span>
          <SocialIcon url="https://www.facebook.com/exceptionalintegrationsinc/" style={{...headerStyles}}/>
          <SocialIcon url="https://www.instagram.com/exceptionalintegrations/" style={{...headerStyles}}/>
        </div>
      </div>
    </nav>
  );
  }
}

export default Header
