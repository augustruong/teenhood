import React from 'react';
import { NavLink } from 'react-router-dom';
import LessonNav from '../../components/LessonNav';

import './ContentPage.css'

export default function ContentPage(props) {
    // const thisLesson = EhonData[props.index];

    return(
        <div className='content-page'>
            <LessonNav index={props.index}/>
        </div>
    )
}