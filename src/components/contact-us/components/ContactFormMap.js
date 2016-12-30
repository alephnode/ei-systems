import React from 'react'

const styles = {
  border: 0,
  margin: "10px auto 40px auto",
}

const ContactFormMap  = () =>
<div className="col-md-12">
  <h2 className="pull-left">Where to find us</h2>
  <iframe
    width="100%"
    height="350"
    frameBorder="0" style={{...styles}}
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCPkJehHyxkKlfSQVB5oXw2btwvLrt-S9w&q=6340+South+Sandhill+Road+Suite+5,Las+Vegas+NV" allowFullScreen>
    </iframe>
  </div>

export default ContactFormMap
