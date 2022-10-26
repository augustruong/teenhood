import React from 'react';
import { NavLink } from 'react-router-dom';

import EhonData from '../../data/EhonData.json'

export default function CoverPage(props) {
    const thisLesson = EhonData[props.index - 1]
    return(
        <div id='cover-page'>
            <section className='header-section'>
                <img className='cover-img' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/cover.png`}/>
                <div className='header'>
                    <h2 className='title'>{thisLesson.title}</h2>
                </div>
            </section>
        </div>
    )
}