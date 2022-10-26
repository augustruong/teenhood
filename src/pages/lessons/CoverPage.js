import React from 'react';
import { NavLink } from 'react-router-dom';

import EhonData from '../../data/EhonData.json'

import "./CoverPage.css"

export default function CoverPage(props) {
    const thisLesson = EhonData[props.index]
    return(
        <div id='cover-page'>
            <section className='header-section'>
                <img className='cover-img' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/cover.png`}/>
                <div className='header'>
                    <h2 className='title'>{thisLesson.title}</h2>
                    <div className='nav-wrapper flex-row'>
                        <div className='flex-row align-ct'>
                            <button className='start-btn'>START</button>
                            <div className='bold m'>概要を見る</div>
                        </div>
                        <div className='flex-row' style={{gap: 10}}>
                            <button className='method-icon jisho'><NavLink to={`/jisho`} >辞</NavLink></button>
                            <button className='method-icon nayami'><NavLink to={`/nayami`}>悩</NavLink></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}