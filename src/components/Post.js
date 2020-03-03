import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faComment, faShareSquare } from '@fortawesome/free-regular-svg-icons';

class Post extends Component{
    render(){
        const post = this.props.postData;
        let postContent;
        if(post.postImg){
            postContent = (
                <span>
                <p className="postText">{post.postText}</p>
                <img className="postImg" src={post.postImg} />
                </span>
            )
        } else {
            postContent = (
                <p className="postText">{post.postText}</p>
            )
        }
        return(
            <div className="container postContainer">
                <div id="postContainer2" className="container">
                    <img className="postUserImg" src={post.userImg} />
                    <div className="postInfo">
                        <h6 className="postUser">{post.userName}</h6>
                        <p className="postTime">{post.postTime}  - <FontAwesomeIcon icon={faUserFriends}/></p>
                    </div>
                    {postContent}
                </div>
                <div className="postInteractions mt-1">
                    {/* post.postLikes + var to make 'Like' functionality work */}
                    <h6 className="postLikes">{post.postLikes}</h6><h6 className="postStatus">{post.postComments} Comments  {post.postShares} Shares</h6>
                </div>
                <div className="postBtns">
                    <button className="btn btn-secondary postBtn"><FontAwesomeIcon icon={faThumbsUp}/> Like</button>
                    <button className="btn btn-secondary postBtn"><FontAwesomeIcon icon={faComment}/> Comment</button>
                    <button className="btn btn-secondary postBtn"><FontAwesomeIcon icon={faShareSquare}/> Share</button>
                </div>
            </div>
        )
    }
}

export default Post;