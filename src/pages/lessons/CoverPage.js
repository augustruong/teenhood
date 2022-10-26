import React from 'react';
import { NavLink } from 'react-router-dom';
import PartList from '../../components/PartList';

import EhonData from '../../data/EhonData.json'

import "./CoverPage.css"

export default function CoverPage(props) {
    const thisLesson = EhonData[props.index];
    const hashtagArray = thisLesson.hashtag;
    const partListArray = thisLesson.partList;

    return(
        <div id='cover-page'>
            <section className='header-section'>
                <div className='cover-img-wrapper'>
                    <img className='cover-img' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/cover.png`}/>
                </div>
                <div className='header'>
                    <h2 className='title'>{thisLesson.title}</h2>
                    <div className='nav-wrapper flex-row'>
                        <div className='flex-row align-ct'>
                            <button className='start-btn'>START</button>
                            <div className='bold'>概要を見る</div>
                        </div>
                        <div className='flex-row' style={{gap: 10}}>
                            <NavLink to={`/jisho`} ><button className='method-icon jisho'>辞</button></NavLink>
                            <NavLink to={`/nayami`} ><button className='method-icon nayami'>悩</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
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
    )
}