import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class ContactTab extends Component{
    render(){
        const contact = this.props.data;
        return(
            <li><div className="contact"><span id="contactLeft"><img className="contactImg" src={contact.userImg} /><span className="contactName">{contact.userName}</span></span><span className="contactOnline"><FontAwesomeIcon icon={faCircle}/></span></div></li>
        )
    }
}

export default ContactTab;