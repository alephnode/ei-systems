import React from 'react'

class WorkLiveContainer extends React.Component {

  componentWillMount() {
    const script = document.createElement("script");

    script.src = "//www.powr.io/powr.js";
    script.async = true;
    document.body.appendChild(script);
}

   render() {
     return (
       <div id="workLiveContainer">
         <div className="container instaTitleContainer">
          <div className="row">
          <div className="col-md-offset-1 col-md-2">
         <h2 id="instaTitle">Live Feed</h2>
         </div>
          <div className="col-md-8">
         <p className="instaBlurb">See what we're doing in real-time below! If you'd like to see more, follow us on Instagram:
            @exceptionalintegrations</p>
        </div>
        </div>
        </div>
           <div className="tm-embed-container" id="scriptContainer">
           </div>
           <div className="powr-instagram-feed" id="e30104c8_1482124802886"></div>
      </div>
     );
   }
 }

export default WorkLiveContainer
