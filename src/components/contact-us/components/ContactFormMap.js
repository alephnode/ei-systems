import React from 'react'

const contactMapStyles = {
  border: 0,
  margin: "20px auto 90px auto",
  pointerEvents: ''
}

const ContactFormMap  = () =>
<div>
<div className="container contactFormMapContainer">
<div className="col-md-12 contactFormMapContent">
  <h2>Where to find us</h2>
  <p className="contactFormMapBlurb">For easy directions to our office, just use the interactive map below.</p>
  </div>
  </div>
  <div className="overlay"></div>
  <iframe
    width="100%"
    height="350"
    frameBorder="0" style={{...contactMapStyles}}
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCPkJehHyxkKlfSQVB5oXw2btwvLrt-S9w&q=6340+South+Sandhill+Road+Suite+5,Las+Vegas+NV" allowFullScreen>
    </iframe>
    </div>

export default ContactFormMap
