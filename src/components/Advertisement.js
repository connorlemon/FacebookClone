import React, { Component } from 'react';


class Advertisement extends Component{
    render(){
        const ads = this.props.ads;

        return(
            <div className="container" id="adBox">
                <div className="row justify-content-between align-items-center mx-1">
                    <h5 id="adLabel">Sponsored</h5><h6 className="hoverPointer" id="adCreateAd">Create Ad</h6>
                </div>
                <div className="row align-items-center mx-1" id="adBox2">
                    <img id="adImg" src={ads.img} />
                    <h6 className="hoverPointer" id="adTitle">{ads.title}</h6>
                    <p id="adText">{ads.text}</p>
                </div>
            </div>
        )
    }
}

export default Advertisement;