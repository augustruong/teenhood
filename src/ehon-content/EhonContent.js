import React from 'react'
import EhonData from '../data/EhonData.json'
import E1_shishunki from './E1_shishunki';
import E2_gekkei from './E2_gekkei';
import E3_shasei from './E3_shasei';
import E4_suki from './E4_suki';
import E5_akachan from './E5_akachan';
import E6_hinin from './E6_hinin';
import E7_std from './E7_std';
import './Ehon.css'

export default function EhonContent(props) {
    const thisLesson = EhonData[props.index];

  return (
    <div className='lesson-content'>
        {props.index === 0 && <E1_shishunki index={0}/> }
        {props.index === 1 && <E2_gekkei index={1}/> }
        {props.index === 2 && <E3_shasei index={2}/> }
        {props.index === 3 && <E4_suki index={3}/> }
        {props.index === 4 && <E5_akachan index={4}/> }
        {props.index === 5 && <E6_hinin index={5}/> }
        {props.index === 6 && <E7_std index={6}/> }

    </div>
  )
}

