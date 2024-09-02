import React, { Component } from 'react';

class Button extends Component {

    render(){

        if(this.props.hasOwnProperty('href')){

            if(this.props.href.startsWith('http')){
                return(
                    <a className="button" href={this.props.href} target='_blank' rel='noopener noreferrer'>
                        {this.props.children}
                    </a>
                )
            } else {
                return(
                    <a className="button" href={this.props.href}>
                        {this.props.children}
                    </a>
                )
            }
        }
    }
}

export default Button;