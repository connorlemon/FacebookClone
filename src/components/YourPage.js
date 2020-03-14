import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH, faGlobeAmericas, faCamera, faVideo, faUserPlus, faSortDown, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

class YourPage extends Component{
    render(){
        const user = this.props.user;
        return(
            <div className="container yourPageContainer">
                <div id="yourPageTitle" className="container justify-content-between">
                    <h5 id="yourPageLabel">Your Page</h5>
                    <h5 id="yourPageEllipsis"><FontAwesomeIcon className="createIcon hoverPointer" id="ypIcon1" icon={faEllipsisH} /></h5>
                </div>
                <div id="yourPageContainer2" className="container">
                    <img className="yourPageUserImg hoverPointer" src={user.yourPageImg} />
                    <div className="postInfo">
                        <h6 className="yourPageUser hoverPointer">{user.yourPageUserName}</h6>
                        <p className="yourPageSubText hoverPointer"><FontAwesomeIcon className="yourPageIcon" icon={faComments}/>  Messages</p>
                        <p className="yourPageSubText hoverPointer"><FontAwesomeIcon className="yourPageIcon" icon={faGlobeAmericas}/>  Notifications</p>
                    </div>
                </div>
                <div className="yourPageInteractions">
                    <button className="btn btn-secondary yourPageBtn"><FontAwesomeIcon className="ypBtnIcon" icon={faEdit}/>Publish</button>
                    <button className="btn btn-secondary yourPageBtn"><FontAwesomeIcon className="ypBtnIcon" icon={faCamera}/>Photo</button>
                    <button className="btn btn-secondary yourPageBtn"><FontAwesomeIcon className="ypBtnIcon" icon={faVideo}/>Live</button>
                    <button className="btn btn-secondary yourPageBtn"><FontAwesomeIcon className="ypBtnIcon" icon={faUserPlus}/>Invite</button>
                </div>
                <div className="yourPageBtns">
                    <button className="btn btn-primary yourPageBtn2 ypBtn2Selected">Likes</button>
                    <button className="btn btn-primary yourPageBtn2">Views</button>
                    <button className="btn btn-primary yourPageBtn2">Posts</button>
                </div>
                <div className="yourPageText">
                    <h4>72,200</h4>
                    <p id="ypInfoText">888 new likes this week</p>
                </div>
                <div className="createPromoBox">
                    <button className="btn btn-primary yourPageBtn2 promoBtns" id="promoBtn"><FontAwesomeIcon id="ypBtnIcon1" icon={faBullhorn} /> Create Promotion</button>
                    <button className="btn btn-primary yourPageBtn2 promoBtns" id="promoBtn2"><FontAwesomeIcon className="ypBtnIcon2" icon={faSortDown} /></button>
                </div>
            </div>
        )
    }
}

export default YourPage;