import React, { Component } from 'react';
import Sidebar1 from './Sidebar1';
import Sidebar2 from './Sidebar2';
import Sidebar3 from './Sidebar3';
import CreatePost from './CreatePost';
import Stories from './Stories';
import Post from './Post';


class Main extends Component{
    render(){
        const seed = this.props.seedData;
    
        const userData = seed.user;
        const recentlyViewed = seed.recentlyViewed;
        const ads = seed.ads;
        const contacts = seed.contacts;
        const newsFeed = seed.posts.map((post, i)=>{
            return <Post key={i} postData={post} />
        });
        return(
            <div className="row">
                <div className="col-sm-2" id="sidebar1Main">
                    <Sidebar1 user={userData}/>
                </div>
                <div className="col-sm-5" id="mainScroll">
                    <CreatePost user={userData}/>
                    <Stories />
                    {newsFeed}
                </div>
                <div className="col-sm-3" id="sidebar2Main">
                    <Sidebar2 user={userData} recentlyViewed={recentlyViewed} ads={ads}/>
                </div>
                <div className="col-sm-2" id="contactsScroll">
                    <Sidebar3 contacts={contacts} />
                </div>
            </div>
        )
    }
}

export default Main;