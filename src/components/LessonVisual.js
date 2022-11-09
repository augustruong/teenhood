import React from 'react'
import './Header.css'


export default function LessonVisual(props) {
    const lessonName = props.lessonName;

    return(
        <>
            <picture className={lessonName === "shishunki" ? 'lesson-visual active' : 'lesson-visual'}>
                <img 
                    src={process.env.PUBLIC_URL + `/images/ehon/E1_shishunki/visual.png`}
                    width="2400" height="1500"
                />
            </picture>
            <picture className={lessonName === "gekkei" ? 'lesson-visual active' : 'lesson-visual'}>
                <img 
                    src={process.env.PUBLIC_URL + `/images/ehon/E2_gekkei/visual.png`}
                    width="2400" height="1500"
                />
            </picture>
        </>
    )
}