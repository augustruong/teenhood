import React from 'react'
import EhonData from '../data/EhonData.json'
import E1_shishunki from './E1_shishunki';
import E7_std from './E7_std';
import './Ehon.css'

export default function EhonContent(props) {
    const thisLesson = EhonData[props.index];

  return (
    <div className='lesson-content'>
        {props.index === 0 && <E1_shishunki index={0}/> }
        {props.index === 6 && <E7_std index={6}/> }

    </div>
  )
}

