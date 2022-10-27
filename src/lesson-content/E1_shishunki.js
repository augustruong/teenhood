import React from 'react'
import ReactPageScroller from 'react-page-scroller';
import EhonData from '../data/EhonData.json'
import Image from 'react-image-webp';

import './E1_shishunki.css'

export default function E1_shishunki(props) {
  const thisLesson = EhonData[props.index];

  return (
    <ReactPageScroller>
        <section className='e1-s1'>
            <div className='wrapper flex-row'>
                <Image className='img'
                    src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s1_img.png`}
                    webp={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s1_img.webp`}
                />
                <Image className='content'
                    src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s1_content.png`}
                    webp={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s1_content.webp`}
                />
            </div>
        </section>    
        <section className='e1-s2'>
            <div className='wrapper flex-row'>
                <Image className='img'
                    src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s2_img.png`}
                    webp={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s2_img.png`}
                />
                <div className='content'>
                    <img className='title' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s2_title.svg`}/>
                    <p>思春期になると、脳のうから「ホルモンをだしなさい」<br/>
                        という命令が出るようになります。<br/>
                        男の子は精巣から「男性ホルモン」、<br/>
                        女の子は卵巣から「女性ホルモン」。<br/>
                        ホルモンは、血液と一緒にからだ中にはこばれ、<br/>
                        みんなのからだを大人へと成長させます。
                    </p>
                </div>
            </div>
        </section>  
    </ReactPageScroller>
  )
}
