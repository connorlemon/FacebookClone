import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


class Languages extends Component{
    render(){
        return(
            <div id="languageBox" className="container row">
                <div className="col-sm-10">
                    <p className="languagesText"><span id="languagesSelected">English (US) ·</span> <span className="lngOption">Español</span> ·</p><p className="languagesText"> <span className="lngOption">Português (Brasil)</span> · <span className="lngOption">Français (France)</span> · <span className="lngOption">Deutsch</span></p>
                </div>
                <div className="col-sm-2" id="plusSign">
                    <button className="btn btn-secondary" id="lngBtn"><FontAwesomeIcon  icon={faPlus} /></button>
                </div>
            </div>
        )
    }
}

export default Languages;