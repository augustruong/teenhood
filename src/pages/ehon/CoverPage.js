import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import PartList from '../../components/PartList';
import MyProvider from '../../module/MyProvider'


import EhonData from '../../data/EhonData.json'

import "./CoverPage.css"

export default function CoverPage(props) {
    const thisLesson = EhonData[props.index];
    const hashtagArray = thisLesson.hashtag;
    
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return(
        <MyProvider>
        <div id='cover-page'>
            <section className='header-section'>
                <div className='cover-img-wrapper'>
                    <img className='cover-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/cover.png`}/>
                </div>
                <div className='header'>
                    <div className='header-inner'>
                        <h2 className='title'>{thisLesson.title}</h2>
                        <div className='nav-wrapper flex-row'>
                            <div className='flex-row align-ct'>
                                <NavLink to={`/ehon/${thisLesson.lessonId}/content`}><button className='start-btn'>START</button></NavLink>
                                <Link className='description-link' to="content-section">概要を見る</Link>
                            </div>
                            <div className='flex-row' style={{gap: 10}}>
                                <NavLink to={`/ehon/${thisLesson.lessonId}/jisho`}><button className='method-icon jisho'>辞</button></NavLink>
                                <NavLink to={`/ehon/${thisLesson.lessonId}/nayami`} ><button className='method-icon nayami'>悩</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='content-section'>
                <div className='intro-wrapper'>
                    <p>{thisLesson.description}</p>
                    <div className='hashtag-wrapper flex-row'>
                        {hashtagArray.map((tag) => (
                            <div key={tag} className='hashtag'>{tag}</div>
                        ))}
                    </div>
                </div>
                
                <PartList index={props.index}/>
            </section>
        </div>
        </MyProvider>

    )
}