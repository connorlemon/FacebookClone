import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class RecentlyViewed extends Component{
    render(){
        const rvData = this.props.recentlyViewed;
        console.log(rvData);
        const recentlyViewed = rvData.map((rv, i)=>{
            return <div key={i}><img className="rvImage hoverPointer" src={rv.img} /><h3 className="rvImgText">{rv.price}</h3></div>
            
        })
        return(
            <div className="container" id="rvBox">
                <h5 id="rvLabel"><FontAwesomeIcon id="rvIcon1" icon={faHome} /> Listings You Recently Viewed</h5>
                <div className="row rvImagesBox">
                    {recentlyViewed}
                </div>
                <h6 className="hoverPointer" id="rvSeeMore">See More</h6>
            </div>
        )
    }
}

export default RecentlyViewed;