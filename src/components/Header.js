import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export default function NavWrapper(props) {
    const [showNav,setShowNav] = useState(false);
    const [lessonName, setLessonName] = useState("");


    return(
        <header id='header'>
            <NavLink to='/' className='logo'>
                <img src={logo} className='logo-svg'/>
            </NavLink>

            <div id='menu-btn' className={showNav ? 'check' : ''} onClick={() => setShowNav(!showNav)}>
                <span className='line line1'></span>
                <span className='line line2'></span>
                <span className='line line3'></span>
            </div>

            <nav className={`nav ${showNav ? "active" : ""} ${lessonName ? "hover-within" : ""}`} >
                <ul className='nav-list main'>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item'
                            to='/lessons'
                            style={{'--hover-bg-color': 'var(--pink-color)'}}
                            onClick={() => setShowNav(false)} 
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                                <h4 className='nav-item__title lesson-title'>性の絵本</h4>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}