import React from 'react'
import { Link } from 'react-router'
import { SocialIcon } from 'react-social-icons'

const headerStyles = {
  width: "35px",
  height: "35px",
  marginRight: "15px",
  transition: '0.25s ease'
}

class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      scrolled: false,
      color: '#393d40',
      navTransform: '',
      transition: '0.25s ease',
      logoTransform: ''
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
      scrolled: true,
      color: '#ddd',
      navTransform: 'fadeIn 0.25s forwards',
      logoTransform: 'slideInRight 0.5s 0.1s forwards'
    })
  }

  render(){
  let navState = this.state.scrolled ? 'displayNav' : 'mainNav'
  return (
    <nav className="navbar navbar-default navbar-fixed-top" id={navState}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" style={{animation: this.state.logoTransform}} id="siteLogo" href="/"><img role="presentation" src={require('../../images/flat_ei_nav.png')} /></a>
        </div>
        <div className="nav navbar-nav navbar-right" id="headerNavLinks">
          <Link to="/our-work" activeClassName="active" style={{...headerStyles,animation: this.state.navTransform}}>Work</Link>
          <Link to="/contact-us" activeClassName="active" style={{...headerStyles, animaation: this.state.navTransform}}>Contact</Link>
          <span className="navSep" style={{color: this.state.color, animation: this.state.navTransform}}>{" | "}</span>
          <SocialIcon url="https://www.facebook.com/exceptionalintegrationsinc/" style={{...headerStyles, animation: this.state.navTransform}} color={this.state.color}/>
          <SocialIcon url="https://www.instagram.com/exceptionalintegrations/" style={{...headerStyles, animation: this.state.navTransform}} color={this.state.color}/>
        </div>
      </div>
    </nav>
  );
  }
}

export default Header
