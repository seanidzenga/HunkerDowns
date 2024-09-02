import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../img/98738-ffffff.svg';
import {ReactComponent as BurgerMenu} from '../img/menu_white_24dp.svg';

class Nav extends Component{

    constructor(props){

        super(props);   
        this.state = {
            active: false,
        };

        this.toggleClass = this.toggleClass.bind(this);
    }

    render(){

        return (
            <nav>
                <ul className='navigation'>
                    <li>
                        <BurgerMenu className='burger-menu' onClick={this.toggleClass} alt='' />
                    </li>
                    <li className={this.state.active ? 'active' : null}>
                        <NavLink className="logo" exact to='/' activeClassName='selected' onClick={this.toggleClass}>
                            <Logo className="logo" viewBox='0 0 1280 1280'/>
                            <span className="logo">Home</span>
                        </NavLink>
                    </li>
                    <li className={this.state.active ? 'active' : null}>
                        <NavLink to ='/join' activeClassName='selected' onClick={this.toggleClass}>
                            How to join
                        </NavLink>
                    </li>
                    <li className={this.state.active ? 'active' : null}>
                        <NavLink to='/subfrequencies' activeClassName='selected' onClick={this.toggleClass}>
                            SubFrequencies
                        </NavLink>
                    </li>
                </ul>        
            </nav>
        )
    }

    toggleClass(){
        const currentState = this.state.active;
        this.setState({active: !currentState });
    }
}

export default Nav;