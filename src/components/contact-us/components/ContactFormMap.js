import React from 'react'

const contactMapStyles = {
  border: 0,
  margin: "20px auto 0px auto"
}

class ContactFormMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pointerEvents: 'none'
    }
    this._handleClick = this._handleClick.bind(this)
    this._handleMouseLeave = this._handleMouseLeave.bind(this)
  }
  _handleClick(){
    this.setState({
      pointerEvents: 'auto'
    })
  }
  _handleMouseLeave(){
    this.setState({
      pointerEvents: 'none'
    })
  }
  render(){
    return(
      <div onClick={this._handleClick} className="contactMapMain">
        <iframe
          onMouseLeave={this._handleMouseLeave}
          width="100%"
          height="360"
          frameBorder="0" style={{...contactMapStyles, pointerEvents: this.state.pointerEvents }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCPkJehHyxkKlfSQVB5oXw2btwvLrt-S9w&q=6280+South+Valley+View+Boulevard+Suite+238,Las+Vegas+NV" allowFullScreen>
          </iframe>
        </div>
      );
  }
}
export default ContactFormMap
