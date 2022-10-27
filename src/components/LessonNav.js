import React from 'react';
import { NavLink } from 'react-router-dom';
import PartList from './PartList';

import EhonData from '../data/EhonData.json'

import './LessonNav.css'

export default function LessonNav(props) {
    const thisLesson = EhonData[props.index];

    return(
        <nav className='lesson-nav-wrapper'>
            <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/thumbnail.png`}/>
            <div className='header'>
                <h4 className='title'>{thisLesson.title}</h4>
                <div className='progress-wrapper'>
                    <div className='progress-bar'></div>
                    <div className='progress-status' style={{fontSize: 12}}>% COMPLETE</div>
                </div>
                <div className='method-wrapper'>
                    <NavLink to={`/`} ><button className='method-icon ehon small' >絵</button></NavLink>
                    <NavLink to={`/`} ><button className='method-icon jisho small' >辞</button></NavLink>
                    <NavLink to={`/`} ><button className='method-icon nayami small' >悩</button></NavLink>
                </div>
            </div>

            <div className='part-list-scroll'>
                <PartList index={props.index}/>
            </div>
        </nav>
    )
}