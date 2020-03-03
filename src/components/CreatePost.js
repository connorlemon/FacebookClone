import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus, faMapMarkerAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class CreatePost extends Component{
    render(){
        return(
            <div id="createInput" className="container">
                <h5>Create Post</h5>
                <div id="createForm">
                    <img className="userImg" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/78619193_10214884544731469_6401466235757789184_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_oc=AQl7niJyFK-r6SXOQN1CCO5CO5ke06wTen3LhrWMlscX5JjctNXLMcZ2cQn6l0wS9lWYNWPZUo7BF_Zz5KlrAnbt&_nc_ht=scontent-lax3-1.xx&oh=c8184bba4095524f8efaeed9a059dc60&oe=5EE940F9"/>
                    <textarea id="createTextArea" placeholder="What's on your mind, Connor?"></textarea>
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