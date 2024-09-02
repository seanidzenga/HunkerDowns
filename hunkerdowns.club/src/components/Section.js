import React, { Component } from 'react';

class Section extends Component {

    render(){

        if(this.props.hasOwnProperty('bg')){

            return(

                <div className="section" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${this.props.bg})` }}>
                    <div className="section-inner">
                        {this.props.children}
                    </div>
                </div>
            )

        } else {

            return(
                
                <div className="section">
                    <div className="section-inner">
                        {this.props.children}
                    </div>
                </div>
            )
        }
    }
}

export default Section;