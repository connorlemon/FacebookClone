import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutubeSquare, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faStore, faUsers, faFlag, faCoins, faBookmark, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

class Sidebar1 extends Component{
    render(){
        const user = this.props.user;
        return(
            <div class="container sideBar1">
                <p id="sideUser"><img id="sideUserImg" class="userImg" src={user.userImg} /> {user.userName}</p>
                <div id="sideBarSelections">
                    <ul class="sideMenu">
                        <li class="sideOption sideActive"><span class="sideIcon" id="sideIcon1"><FontAwesomeIcon icon={faNewspaper} /></span>News Feed</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon2"><FontAwesomeIcon icon={faFacebookMessenger} /></span>Messenger</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon3"><FontAwesomeIcon icon={faYoutubeSquare} /></span>Watch</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon4"><FontAwesomeIcon icon={faStore} /></span>Marketplace</li>
                    </ul>
                    <h5 class="sideLabel">Shortcuts</h5>
                    <ul class="sideMenu2">
                        <li class="sideOption"><span class="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>Composition</li>
                        <li class="sideOption"><span class="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>The Late Show</li>
                        <li class="sideOption"><span class="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>Kazoo Players</li>
                        <li class="sideOption"><span class="sideIcon5"><FontAwesomeIcon icon={faUsers} /></span>Snowboarders</li>
                    </ul>
                    <h5 class="sideLabel">Explore</h5>
                    <ul class="sideMenu">
                        <li class="sideOption"><span class="sideIcon5" id="sideIcon6"><FontAwesomeIcon icon={faUsers} /></span>Groups</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon7"><FontAwesomeIcon icon={faFlag} /></span>Pages</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon8"><FontAwesomeIcon icon={faCalendar} /></span>Events</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon9"><FontAwesomeIcon icon={faCoins} /></span>Fundraisers</li>
                        <li class="sideOption"><span class="sideIcon" id="sideIcon10"><FontAwesomeIcon icon={faBookmark} /></span>Saved</li>
                        <li id="side1SeeMore" class="sideOption"><span class="sideIcon" id="sideIcon11"><FontAwesomeIcon icon={faSortDown} /></span>See More...</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar1;