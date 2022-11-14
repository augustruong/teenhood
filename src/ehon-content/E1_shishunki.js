import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E1_shishunki.css'

export default function E1_shishunki(props) {
  const thisLesson = EhonData[props.index];
  const [privateShow, setPrivateShow] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [word, setWord] = useState("");
   
  return (
    <div>
        <PopUpModal word={word} showModal={showModal} setShowModal={setShowModal} />
        
        <div className='lesson-content__inner'>
            <MContext.Consumer>
                {(context) => (                
                    <ReactPageScroller
                        customPageNumber={context.state.currentPage}
                        onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                    >
                        <section className='e1 s1'>
                            <div className='section-wrapper flex-row'>
                                <Image className='img'
                                    src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_img.png`}
                                    webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_img.webp`}
                                />
                                <Image className='content'
                                    src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_content.png`}
                                    webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_content.webp`}
                                />
                            </div>
                        </section>    
                        <section className='e1 s2'>
                            <div className='section-wrapper flex-row'>
                                <Image className='img'
                                    src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_hormones.png`}
                                    webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_hormones.png`}
                                />
                                <div className='content'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
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
                        <section className='e1 s3'>
                            <div className='section-wrapper'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                <button className='no-style private-btn' onClick={() => setPrivateShow(!privateShow)}>
                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_private-btn.svg`}/>
                                </button>
                                
                                <div className='features-wrapper'>
                                    <div className='boys'>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体型（男）")}}>
                                            <div>からだの成長</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-muscle.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("声枯れ")}}>
                                            <div>声の変化</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-voice.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("射精")}}>
                                            <div>ペニスと精巣の成長</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-penis.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体毛")}}>
                                            <div>体毛の成長</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-hair.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("汗・ニキビ")}}>
                                            <div>汗、にきび</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-pimple.png`}/>
                                        </div>
                                    </div>
                                    <div className='girls'>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("乳房")}}> 
                                            <div>乳房の成長</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-breast.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体型（女）")}}>
                                            <div>からだの成長</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-curve.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("体毛")}}>
                                            <div>体毛の成長</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-hair.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("汗・ニキビ")}}>
                                            <div>汗、にきび</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-pimple.png`}/>
                                        </div>
                                        <div className='feature' onClick={() => {setShowModal(!showModal); setWord("月経")}}>
                                            <div>月経</div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-menstru.png`}/>
                                        </div>
                                    </div>
                                </div>

                                <div className='karada-wrapper'>
                                    <img className={privateShow ? 'private show' : 'private'} src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_private.gif`}/>
                                    <img className='body' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_body.png`}/>
                                </div>
                            </div>
                        </section>
                        <section className='e1 s4'>
                            <div className='section-wrapper'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                <div className='gaiseiki flex-row'>
                                    <div className='flex-column girls'>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_onna-seiki.png`}/>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_onna-seiki-close.png`}/>
                                    </div>
                                    <div className='flex-column boys'>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_otoko-seiki.png`}/>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_otoko-seiki-close.png`}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ReactPageScroller>
                )}
            </MContext.Consumer>
        </div>
    </div>
  )
}
