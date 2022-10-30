import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { WordModal } from '../components/WordModal'

import EhonData from '../data/EhonData.json'

import './LessonContent.css'
import './E1_shishunki.css'

export default function E1_shishunki(props) {
  const thisLesson = EhonData[props.index];
  const [privateShow, setPrivateShow] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [word, setWord] = useState("");

  return (
    <div>
        <WordModal word={word} showModal={showModal} setShowModal={setShowModal} />
        
        <div className='lesson-content__inner'>
            <ReactPageScroller>
                <section className='e1-s1'>
                    <div className='section-wrapper flex-row'>
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
                    <div className='section-wrapper flex-row'>
                        <Image className='img'
                            src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s2_img.png`}
                            webp={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s2_img.png`}
                        />
                        <div className='content'>
                            <img className='title' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s2_title.svg`}/>
                            <p>思春期になると、脳のうから「ホルモンをだしなさい」<br/>
                                という命令が出るようになります。<br/>
                                男の子は精巣から<span className='keyword'>「男性ホルモン」</span>、<br/>
                                女の子は卵巣から<span className='keyword'>「女性ホルモン」</span>。<br/>
                                ホルモンは、血液と一緒にからだ中にはこばれ、<br/>
                                みんなのからだを大人へと成長させます。
                            </p>
                        </div>
                    </div>
                </section>  
                <section className='e1-s3'>
                    <div className='section-wrapper'>
                        <img className='title' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s3_title.svg`}/>
                        <button className='no-style private-btn' onClick={() => setPrivateShow(!privateShow)}>
                            <img src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s3_private_btn.svg`}/>
                        </button>
                        
                        <div className='features-wrapper'>
                            <div className='boys'>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体型（男）")}}>
                                    <div>からだの成長</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-muscle.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("声枯れ")}}>
                                    <div>声の変化</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-voice.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("射精（精通）")}}>
                                    <div>ペニスと精巣の成長</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-penis.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体毛、陰毛")}}>
                                    <div>体毛の成長</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-hair.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("汗、ニキビ")}}>
                                    <div>汗、にきび</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-pimple.png`}/>
                                </div>
                            </div>
                            <div className='girls'>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("乳房")}}> 
                                    <div>乳房の成長</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-breast.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体型（女）")}}>
                                    <div>からだの成長</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-curve.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体毛、陰毛")}}>
                                    <div>体毛の成長</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-hair.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("汗、ニキビ")}}>
                                    <div>汗、にきび</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-pimple.png`}/>
                                </div>
                                <div className='feature' onClick={() => {setShowModal(!showModal); setWord("月経")}}>
                                    <div>月経</div>
                                    <img className='icon' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/icons/i-menstru.png`}/>
                                </div>
                            </div>
                        </div>

                        <div className='karada-wrapper'>
                            <img className={privateShow ? 'private show' : 'private'} src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s3_private.gif`}/>
                            <img className='futari' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s3_futari.png`}/>
                        </div>
                    </div>
                </section >
            </ReactPageScroller>
        </div>
    </div>
  )
}
