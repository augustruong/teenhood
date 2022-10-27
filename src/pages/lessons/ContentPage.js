import React from 'react';
import { NavLink } from 'react-router-dom';
import LessonNav from '../../components/LessonNav';
import LessonContent from '../../lesson-content/LessonContent';

export default function ContentPage(props) {
    return(
        <div className='content-page'>
            <LessonNav index={props.index}/>
            <LessonContent index={props.index}/>
        </div>
    )
}