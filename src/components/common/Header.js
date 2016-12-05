import React from 'react'
import { Link } from 'react-router'

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
          <a className="navbar-brand " id="siteLogo" href="/">EI Systems Logo</a>
        </div>
        <div className="nav navbar-nav navbar-right" id="headerNavLinks">
          <Link to="/our-work" activeClassName="active">Work</Link>
          {" | "}
          <Link to="/our-team" activeClassName="active">Team</Link>
          {" | "}
          <Link to="/contact-us" activeClassName="active">Contact</Link>
        </div>
      </div>
    </nav>
  );
  }
}

export default Header
