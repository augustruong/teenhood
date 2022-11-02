import React from 'react'
import EhonData from '../data/EhonData.json'
import E1_shishunki from './E1_shishunki';
import './Ehon.css'

export default function EhonContent(props) {
    const thisLesson = EhonData[props.index];

  return (
    <div className='lesson-content'>
        {props.index === 0 && <E1_shishunki index={0}/> }
    </div>
  )
}
