import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus, faMapMarkerAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class CreatePost extends Component{
    render(){
        const user = this.props.user;
        return(
            <div id="createInput" className="container">
                <h5>Create Post</h5>
                <div id="createForm">
                    <img className="userImg" src={user.userImg}/>
                    <textarea id="createTextArea" placeholder={"What's on your mind, " + user.userName.split(" ")[0] + "?"}></textarea>
                </div>
                <div id="createBtns">
                    <button className="btn btn-primary"><FontAwesomeIcon className="createIcon pt-1" id="createIcon1" icon={faImage} />Photo/Video</button>
                    <button className="btn btn-primary"><FontAwesomeIcon className="createIcon pt-1" id="createIcon2" icon={faUserPlus} />Tag Friends</button>
                    <button className="btn btn-primary"><FontAwesomeIcon className="createIcon pt-1" id="createIcon3" icon={faMapMarkerAlt} />Check In</button>
                    <button className="btn btn-primary"><FontAwesomeIcon className="createIcon" id="createIcon4" icon={faEllipsisH} /></button>
                </div>
            </div>
        )
    }
}

export default CreatePost;