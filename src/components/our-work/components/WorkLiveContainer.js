import React from 'react'

class WorkLiveContainer extends React.Component {

  componentWillMount() {
    const script = document.createElement("script");

    script.src = "http://www.powr.io/powr.js";
    script.async = true;
    document.body.appendChild(script);
}

   render() {
     return (
       <div id="workLiveContainer">
         <h1 id="instaTitle">Live Feed</h1>
           <div className="tm-embed-container" id="scriptContainer">
           </div>
           <div className="powr-instagram-feed" id="e30104c8_1482124802886"></div>
      </div>
     );
   }
 }

export default WorkLiveContainer
