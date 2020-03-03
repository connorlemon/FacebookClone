import React, { Component } from 'react';

class Stories extends Component{
    render(){
        return(
            <div id="storiesContainer" className="container">
                <h6>Stories<span id="storySeeAll">See All</span></h6>
                <div className="storyArea container">
                    <div className="story" id="story1">
                        <p className="storyIcon"></p>
                        <p className="storyName">Add to Story</p>
                    </div>
                    <div className="story" id="story2">
                        <p className="storyIcon"></p>
                        <p className="storyName">Derek Lemon</p>
                    </div>
                    <div className="story" id="story3">
                        <p className="storyIcon"></p>
                        <p className="storyName">McKell Lemon</p>
                    </div>
                    <div className="story" id="story4">
                        <p className="storyIcon"></p>
                        <p className="storyName">Kira Bartoli</p>
                    </div>
            
                </div>

            </div>
        )
    }
}

export default Stories;