import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutubeSquare, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faStore, faUsers, faFlag, faCoins, faBookmark, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

class Sidebar1 extends Component{
    render(){
        const user = this.props.user;
        return(
            <div className="container sideBar1">
                <p id="sideUser"><img id="sideUserImg" className="userImg" src={user.userImg} /> {user.userName}</p>
                <div id="sideBarSelections">
                    <ul className="sideMenu">
                        <li className="sideOption sideActive"><span className="sideIcon" id="sideIcon1"><FontAwesomeIcon icon={faNewspaper} /></span>News Feed</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon2"><FontAwesomeIcon icon={faFacebookMessenger} /></span>Messenger</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon3"><FontAwesomeIcon icon={faYoutubeSquare} /></span>Watch</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon4"><FontAwesomeIcon icon={faStore} /></span>Marketplace</li>
                    </ul>
                    <h5 className="sideLabel">Shortcuts</h5>
                    <ul className="sideMenu2">
                        <li className="sideOption"><span className="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>Composition</li>
                        <li className="sideOption"><span className="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>The Late Show</li>
                        <li className="sideOption"><span className="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>Kazoo Players</li>
                        <li className="sideOption"><span className="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>Snowboarders</li>
                    </ul>
                    <h5 className="sideLabel">Explore</h5>
                    <ul className="sideMenu">
                        <li className="sideOption"><span className="sideIcon5" id="sideIcon6"><FontAwesomeIcon icon={faUsers} /></span>Groups</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon7"><FontAwesomeIcon icon={faFlag} /></span>Pages</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon8"><FontAwesomeIcon icon={faCalendar} /></span>Events</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon9"><FontAwesomeIcon icon={faCoins} /></span>Fundraisers</li>
                        <li className="sideOption"><span className="sideIcon" id="sideIcon10"><FontAwesomeIcon icon={faBookmark} /></span>Saved</li>
                        <li id="side1SeeMore" className="sideOption"><span className="sideIcon" id="sideIcon11"><FontAwesomeIcon icon={faSortDown} /></span>See More...</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar1;