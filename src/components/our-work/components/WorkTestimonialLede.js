import React from 'react'
import Waypoint from 'react-waypoint'

class WorkTestimonialLede extends React.Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
      visibility: 'hidden'
    }
    this._handleContactWaypointEnter = this._handleContactWaypointEnter.bind(this)
  }

  _handleContactWaypointEnter() {
    this.setState({
      opacity: 1,
      visibility: 'visible'
    })
  }

   render() {
     return (
       <div id="workTestimonialLedeContainer">
           <div className="row">
             <div className="col-xs-12 testimonialLede" style={{opacity: this.state.opacity, visibility: this.state.visibility, transition: 'all 0.75s'}}>Read what our customers have to say ...</div>
         </div>
           <Waypoint bottomOffset='17%' onEnter={this._handleContactWaypointEnter} scrollableAncestor={window} />
      </div>
     );
   }
 }

export default WorkTestimonialLede
