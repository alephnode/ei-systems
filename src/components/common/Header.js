import React from 'react'
import { Link } from 'react-router'
import { SocialIcon } from 'react-social-icons'

const headerStyles = {
  width: "35px",
  height: "35px",
  marginRight: "15px",
  transition: '0.25s ease'
}

const mobileHeaderStyles = {
  width: "50px",
  height: "50px",
  marginLeft: "40px",
  marginTop: "40px"
}

class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      scrolled: false,
      color: '#393d40',
      navTransform: '',
      transition: '0.25s ease',
      logoTransform: '',
      mobileMenu: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleMobileMenu = this.handleMobileMenu.bind(this)
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

  handleMobileMenu() {
    (this.state.mobileMenu) ?
    this.setState({
      mobileMenu: false
    })
    :
    this.setState({
      mobileMenu: true
    })
    console.log(this.state.mobileMenu)
  }

  render(){
  let navState = this.state.scrolled ? 'displayNav' : 'mainNav'
  return (
    <div>
    { this.state.mobileMenu  ? (
      <div className="mobileMenuModal">
        <div className="pull-right">
          <img className="mobileMenuModalButton" onClick={this.handleMobileMenu} src={require("../../images/mobileEx.png")} />
        </div>
        <div className="mobileMenuLinks">
          <Link onClick={this.handleMobileMenu} to="/our-work">Our Work</Link>
          <Link onClick={this.handleMobileMenu} to="/contact-us">Contact Us</Link>
          <hr className="mobileNavSep" />
          <SocialIcon url="https://www.facebook.com/exceptionalintegrationsinc/" style={{...mobileHeaderStyles}} color={this.state.color}/>
          <SocialIcon url="https://www.instagram.com/exceptionalintegrations/" style={{...mobileHeaderStyles, marginLeft: "20px"}} color={this.state.color}/>
        </div>
      </div>
      ) : (
        ''
    )}
    <nav className="navbar navbar-default navbar-fixed-top" id={navState}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" style={{animation: this.state.logoTransform}} id="siteLogo" href="/"><img role="presentation" src={require('../../images/flat_ei_nav.png')} /></a>
        </div>
        <div className="nav navbar-nav navbar-right" id="headerNavLinks">
          <Link className="hidden-xs" to="/our-work" activeClassName="active" style={{...headerStyles,animation: this.state.navTransform}}>Work</Link>
          <Link className="hidden-xs" to="/contact-us" activeClassName="active" style={{...headerStyles, animaation: this.state.navTransform}}>Contact</Link>
          <span className="navSep hidden-xs" style={{color: this.state.color, animation: this.state.navTransform}}>{" | "}</span>
          <SocialIcon className="hidden-xs" url="https://www.facebook.com/exceptionalintegrationsinc/" style={{...headerStyles, animation: this.state.navTransform}} color={this.state.color}/>
          <SocialIcon className="hidden-xs" url="https://www.instagram.com/exceptionalintegrations/" style={{...headerStyles, animation: this.state.navTransform}} color={this.state.color}/>
          <img className="mobileMenu" onClick={this.handleMobileMenu} src={require("../../images/menu.png")} />
        </div>
      </div>
    </nav>
    </div>
  );
  }
}

export default Header
