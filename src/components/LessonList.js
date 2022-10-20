import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LessonThumb from '../components/LessonThumb'

import './LessonList.css'

export default function LessonList() {
    return(
        <div className='lesson-list flex-column'>
            <LessonThumb lessonId="01_shishunki" title="#1: 私のからだが変化している" subtitle="思春期のしるし、男女のからだのちがい"/>
            <LessonThumb lessonId="02_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい"/>
            <LessonThumb lessonId="03_shasei" title="#3: 射精って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい"/>
            <LessonThumb lessonId="04_suki" title="#4: 人を好きになるってこと？" subtitle="思春期のしるし、男女のからだのちがい"/>
            <LessonThumb lessonId="05_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい"/>
            <LessonThumb lessonId="06_hinin" title="#6: 赤ちゃんが欲しくときは" subtitle="思春期のしるし、男女のからだのちがい"/>
            <LessonThumb lessonId="07_std" title="#7: 性感染症を知ろう" subtitle="思春期のしるし、男女のからだのちがい"/>
        </div>
    )
}