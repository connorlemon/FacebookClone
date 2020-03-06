import React, { Component } from 'react';

class Terms extends Component{
    render(){
        return(
            <div id="termsBox" className="container">
                <p id="termsText"><span className="termOption">Privacy</span> · <span className="termOption">Terms</span> · <span className="termOption">Advertising</span> · <span className="termOption">Ad Choices</span> · <span className="termOption">Cookies</span> · 
                <span className="termOption" id="termMore">More</span></p>
                <p id="copyright">Facebook © 2020</p>
            </div>
        )
    }
}

export default Terms;