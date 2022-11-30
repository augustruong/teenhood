import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

import './Header.css'
import ChatBox from '../module/ChatBox';

const CloseButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -40px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
  color: #ffffff;
`;

export default function NavWrapper(props) {
    const [showNav,setShowNav] = useState(false);
    const [lessonId, setLessonId] = useState("");

    return(
        <header id='header'>
            <NavLink to='/' className='logo'>
                <img src={logo} className='logo-svg'/>
            </NavLink>

            <ChatBox />  

            <div id='menu-btn' className={showNav ? 'checked' : ''} onClick={() => setShowNav(!showNav)}>
                <span className='line line1'></span>
                <span className='line line2'></span>
                <span className='line line3'></span>
            </div>

            <nav className={`nav ${showNav ? "active" : ""} ${lessonId ? "hover-within" : ""}`} >
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
                                <h3 className='nav-item__title lesson-title'>性の絵本</h3>
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
                                <h3 className='nav-item__title lesson-title'>性の辞書</h3>
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
                                <h3 className='nav-item__title lesson-title'>性の悩み</h3>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e1_shishunki/cover'
                            style={{'--hover-bg-color': '#215371'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e1_shishunki")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>私のからだがどう変化している？</h4>
                            <div className='nav-item__subtitle body-text'>思春期のしるし、男女のからだのちがい</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e2_gekkei/cover'
                            style={{'--hover-bg-color': '#C76767'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e2_gekkei")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>月経って何がおこるの?</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e3_shasei/cover'
                            style={{'--hover-bg-color': '#4E8DDB'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e3_shasei")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>射精って何がおこるの？</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e4_suki/cover'
                            style={{'--hover-bg-color': '#FC7B92'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e4_suki")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>人を好きになるってこと？</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e5_akachan/cover'
                            style={{'--hover-bg-color': '#44AE7D'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e5_akachan")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>赤ちゃんはどこからくるの？</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e6_hinin/cover'
                            style={{'--hover-bg-color': '#765EC5'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e6_hinin")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>基本的な避妊方法</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e7_std/cover'
                            style={{'--hover-bg-color': '#FFB31F'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e7_std")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>性感染症を知ろう</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            className='nav-item lesson'
                            to='/ehon/e7_std/cover'
                            style={{'--hover-bg-color': '#FFB31F'}}
                            onClick={() => setShowNav(false)}
                            onMouseEnter = {() => setLessonId("e7_std")}
                            onMouseLeave = {() => setLessonId("")}
                        >
                            <div className='nav-item__transform-wrapper'
                                style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                            >
                            <h4 className='nav-item__title'>性感染症を知ろう</h4>
                            <div className='nav-item__subtitle'>女性の内性器</div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <picture className={lessonId ? 'lesson-visual active' : 'lesson-visual'}>
                <img 
                    src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                    width="2400" height="1500"
                />
            </picture>
            <div className={showNav ? "nav-backdrop active" : "nav-backdrop"}></div>
        </header>
    )
}