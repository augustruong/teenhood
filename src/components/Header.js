import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import LessonVisual from './LessonVisual';

import './Header.css'

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
                            to='/ehon'
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
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item'
                            to='/jisho'
                            style={{'--hover-bg-color': 'var(--blue-color)'}}
                            onClick={() => setShowNav(false)} 
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                                <h4 className='nav-item__title lesson-title'>性の辞書</h4>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item'
                            to='/nayami'
                            style={{'--hover-bg-color': 'var(--green-color)'}}
                            onClick={() => setShowNav(false)} 
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                                <h4 className='nav-item__title lesson-title'>性のよくある悩み</h4>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/shishunki'
                            style={{'--hover-bg-color': '#215371'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonName("shishunki")}
                            onMouseLeave = {() => setLessonName("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h5 className='nav-item__title'>私のからだがどう変化している？</h5>
                            <div className='nav-item__subtitle body-text'>思春期・大人になるの始まり</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/gekkei'
                            style={{'--hover-bg-color': '#C76767'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonName("gekkei")}
                            onMouseLeave = {() => setLessonName("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h5 className='nav-item__title'>月経って何がおこるの?</h5>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <LessonVisual lessonName={lessonName}/>
            <div className={showNav ? "nav-backdrop active" : "nav-backdrop"}></div>
        </header>
    )
}