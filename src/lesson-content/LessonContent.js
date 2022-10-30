import React from 'react'
import EhonData from '../data/EhonData.json'
import E1_shishunki from './E1_shishunki';
import './LessonContent.css'

export default function LessonContent(props) {
    const thisLesson = EhonData[props.index];

  return (
    <div className='lesson-content'>
        {props.index === 0 && <E1_shishunki index={0}/> }
    </div>
  )
}
