import React, { Component } from 'react';
import Sidebar1 from './Sidebar1';
import Sidebar2 from './Sidebar2';
import CreatePost from './CreatePost';
import Stories from './Stories';
import Post from './Post';
import seedData from '../seed.js';


class Main extends Component{
    render(){
        const userData = seedData.user;
        const newsFeed = seedData.posts.map((post, i)=>{
            return <Post key={i} postData={post} />
        });
        return(
            <div class="row">
                <div className="col-sm-2">
                    <Sidebar1 user={userData}/>
                </div>
                <div className="col-sm-6">
                    <CreatePost />
                    <Stories />
                    {newsFeed}
                </div>
                <div className="col-sm-2">
                    <Sidebar2 />
                </div>
                <div className="col-sm-2">
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Main;