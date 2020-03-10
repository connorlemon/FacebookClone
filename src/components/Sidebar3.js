import React, { Component } from 'react';
import ContactTab from './ContactTab';

class Sidebar3 extends Component{
    render(){
        const data = this.props.contacts;
        const contacts = data.map((contact, i)=>{
            return(
                <ContactTab key={i} data={contact} />
            )
        })
        return(
            <div className="container" id="sideBar3">
                <h6 id="s3Label">CONTACTS</h6>
                <ul className="contactSidebar">
                    {contacts}
                </ul>
            </div>
        )
    }
}

export default Sidebar3;