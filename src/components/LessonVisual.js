import React from 'react'

export default function ProjectVisual(props) {
    const lessonId = props.lessonId;
  return (
    <>
        <picture className={lessonId === "e1_shishunki" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={lessonId === "e2_gekkei" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={lessonId === "e3_shasei" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={lessonId === "e4_suki" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={lessonId === "e5_akachan" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={lessonId === "e6_hinin" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={lessonId === "e7_std" ? 'lesson-visual active' : 'lesson-visual'}>
            <img 
                src={process.env.PUBLIC_URL + `/images/ehon/${lessonId}/visual.png`}
                width="2400" height="1500"
            />
        </picture>
    </>
  )
}