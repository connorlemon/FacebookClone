import React, { Component } from 'react';
import CreatePost from './CreatePost';
import Stories from './Stories';
import Post from './Post';
import seedData from '../seed.js';


class Main extends Component{
    render(){
        return(
            <div class="row">
                <div className="col-sm-3">
                    <h6>Sidebar</h6>
                </div>
                <div className="col-sm-6">
                    <CreatePost />
                    <Stories />
                    <Post postData={seedData.posts.post1}/>
                    <Post postData={seedData.posts.post2}/>
                    <Post postData={seedData.posts.post3}/>
                    <Post postData={seedData.posts.post4}/>
                    <Post postData={seedData.posts.post5}/>
                    <Post postData={seedData.posts.post6}/>
                    <Post postData={seedData.posts.post7}/>
                    <Post postData={seedData.posts.post8}/>
                    <Post postData={seedData.posts.post9}/>
                    <Post postData={seedData.posts.post10}/>
                    <Post postData={seedData.posts.post11}/>
                    <Post postData={seedData.posts.post12}/>

                </div>
                <div className="col-sm-3">
                    <h6>Sidebar</h6>
                </div>
            </div>
        )
    }
}

console.log(seedData);

export default Main;