import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import {faSearch, faUserFriends, faCommentDots, faBell, faQuestionCircle, faSortDown } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav justify-content-center my-0 mx-0">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRight" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarRight">
                        <div className="navbar-nav">
                            <li className="mt-0"><Link to="/main" className="nav-item nav-link"><FontAwesomeIcon id="fIcon" icon={faFacebookSquare} /></Link></li>
                            <li><form className="form-inline">
                                <div className="form-group">
                                    <input id="searchField" className="form-control mr-sm-0 py-0 px-1" type="search" placeholder="Search" aria-label="Search" />
                                    <span><button id="searchSubmit" className="btn btn-outline-success py-0" type="submit"><FontAwesomeIcon icon={faSearch} /></button></span>
                                </div>  
                            </form></li>
                            <div className="container justify-content-end mr-auto" >
                                <li><Link to="/main" className="nav-item nav-link pb-1 navText "><img id="userImg" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/78619193_10214884544731469_6401466235757789184_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_oc=AQl7niJyFK-r6SXOQN1CCO5CO5ke06wTen3LhrWMlscX5JjctNXLMcZ2cQn6l0wS9lWYNWPZUo7BF_Zz5KlrAnbt&_nc_ht=scontent-lax3-1.xx&oh=c8184bba4095524f8efaeed9a059dc60&oe=5EE940F9"/>Connor</Link></li>
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