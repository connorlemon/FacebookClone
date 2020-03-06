import React, { Component } from 'react';
import YourPage from './YourPage';
import RecentlyViewed from './RecentlyViewed';
import Advertisement from './Advertisement';
import Languages from './Languages';
import Terms from './Terms';

class Sidebar2 extends Component{
    render(){
        return(
            <div className="container sideBar2">
                <YourPage user={this.props.user}/>
                <RecentlyViewed recentlyViewed={this.props.recentlyViewed}/>
                <Advertisement ads={this.props.ads[0]} />
                <Advertisement ads={this.props.ads[1]} />
                <Languages />
                <Terms />
            </div>
        )
    }
}

export default Sidebar2;