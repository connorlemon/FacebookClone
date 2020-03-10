import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import {faSearch, faUserFriends, faCommentDots, faBell, faQuestionCircle, faSortDown } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component{
    render(){
        const user = this.props.user;
        return(
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav justify-content-center my-0 mx-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRight" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarRight">
                        <li className="mt-0"><Link to="/main" className="nav-item nav-link" id="fIconLi"><FontAwesomeIcon id="fIcon" icon={faFacebookSquare} /></Link></li>
                        <div className="navbar-nav">
                            <li><form className="form-inline">
                                <div className="form-group">
                                    <input id="searchField" className="form-control mr-sm-0 py-0 px-1" type="search" placeholder="Search" aria-label="Search" />
                                    <span><button id="searchSubmit" className="btn btn-outline-success py-0" type="submit"><FontAwesomeIcon icon={faSearch} /></button></span>
                                </div>  
                            </form></li>
                            <div className="container justify-content-end mr-auto" >
                                <li><Link to="/main" className="nav-item nav-link pb-1 navText "><img id="userImg" src={user.userImg}/>{user.userName.split(" ")[0]}</Link></li>
                                <li><Link to="/main" className="nav-item nav-link pb-1 mb-0 navText">Home</Link></li>
                                <li><Link to="/main" className="nav-item nav-link pb-1 mb-0 navText">Create</Link></li>
                                <li><Link to="/main" className="nav-item nav-link pb-1"><FontAwesomeIcon className="navIcon" icon={faUserFriends} /></Link></li>
                                <li><Link to="/main" className="nav-item nav-link pb-1"><FontAwesomeIcon className="navIcon" icon={faCommentDots} /></Link></li>
                                <li><Link to="/main" className="nav-item nav-link pb-1"><FontAwesomeIcon className="navIcon" icon={faBell} /></Link></li>
                                <li className="navIcon divider">|</li>
                                <li><Link to="/main" className="nav-item nav-link pb-1"><FontAwesomeIcon className="navIcon" icon={faQuestionCircle} /></Link></li>
                                <li><Link to="/main" className="nav-item nav-link pb-2"><FontAwesomeIcon className="navIcon" icon={faSortDown} /></Link></li>
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>
        )
    }
}

export default NavBar;