import { React, useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../img/logo.svg';
import {ReactComponent as BurgerMenu} from '../img/burger-menu.svg';

const Nav = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <nav>
            <ul className='navigation'>
                <li>
                    <BurgerMenu className='burger-menu' alt='' onClick={() => setBurgerOpen(!burgerOpen)}/>
                </li>
                <li className={burgerOpen ? 'active' : ''}>
                    <NavLink className="logo" to='/' onClick={() => setBurgerOpen(!burgerOpen)}>
                        <Logo className="hunker-downs-logo" viewBox='0 0 250 250'/>
                        <span className="home-button">Home</span>
                    </NavLink>
                </li>
                <li className={burgerOpen ? 'active' : ''}>
                    <NavLink to ='join' onClick={() => setBurgerOpen(!burgerOpen)}>
                        How to join
                    </NavLink>
                </li>
                <li className={burgerOpen ? 'active' : ''}>
                    <NavLink to='subfrequencies' onClick={() => setBurgerOpen(!burgerOpen)}>
                        SubFrequencies
                    </NavLink>
                </li>
            </ul>        
        </nav>
    );
}

export default Nav;
