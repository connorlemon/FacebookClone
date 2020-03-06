import React, { Component } from 'react';
import YourPage from './YourPage';
import RecentlyViewed from './RecentlyViewed';
import Advertisement from './Advertisement';

class Sidebar2 extends Component{
    render(){
        return(
            <div className="container sideBar2">
                <YourPage user={this.props.user}/>
                <RecentlyViewed recentlyViewed={this.props.recentlyViewed}/>
                <Advertisement ads={this.props.ads[0]} />
                <Advertisement ads={this.props.ads[1]} />
            </div>
        )
    }
}

export default Sidebar2;