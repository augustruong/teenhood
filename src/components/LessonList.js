import React from 'react';
import LessonThumb from '../components/LessonThumb'

import './LessonList.css'

export default function LessonList() {
    return(
        <div className='lesson-list'>
            <LessonThumb lessonId="e1_shishunki" title="#1: 私のからだが変化している" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
            <LessonThumb lessonId="e2_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
            <LessonThumb lessonId="e3_shasei" title="#3: 射精って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
            <LessonThumb lessonId="e4_suki" title="#4: 人を好きになるってこと？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
            <LessonThumb lessonId="e5_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
            <LessonThumb lessonId="e6_hinin" title="#6: 基本的な避妊方法" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
            <LessonThumb lessonId="e7_std" title="#7: 性感染症を知ろう" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
        </div>
    )
}