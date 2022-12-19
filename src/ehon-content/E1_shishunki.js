import React, {useEffect, useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../module/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'
import {GlassMagnifier,MOUSE_ACTIVATION,TOUCH_ACTIVATION} from "react-image-magnifiers";

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
        <PopUpModal type={"word"} word={word} showModal={showModal} setShowModal={setShowModal} />
        
        <div className='lesson-content__inner'>
            <MContext.Consumer>
                {(context) => (                
                    <ReactPageScroller
                        customPageNumber={context.state.currentPage}
                        renderAllPagesOnFirstRender={true}
                        onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                        pageOnChange={(number) => {context.visitedCurrentPage(number)}}
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
                            <div className='section-wrapper flex-row scr-center'>
                                <Image className='img' 
                                    src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_hormones.png`}
                                    webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_hormones.png`}
                                />
                                
                                <div className='content'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <p>思春期になると、脳のうから「ホルモンをだしなさい」<br/>
                                        という命令が出るようになります。<br/>
                                        男の子は<span className='jishoword'>精巣</span>から<span className='keyword'>「男性ホルモン」</span>、<br/>
                                        女の子は<span className='jishoword'>卵巣</span>から<span className='keyword'>「女性ホルモン」</span>。<br/>
                                        ホルモンは、血液と一緒にからだ中にはこばれ、<br/>
                                        みんなのからだを大人へと成長させます。
                                    </p>
                                </div>
                            </div>
                        </section>  
                        <section className='e1 s3'>
                            <div className='section-wrapper scr-center'>
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
                                    {/* <img className='s3_body' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_body_teens.png`}/> */}
                                    {/* <img className={privateShow ? 's3_private show' : 's3_private'} src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_private.gif`}/> */}
                                    <iframe className='s3_body' frameborder="0" class="juxtapose" width="100%" height="711" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0fcf2c2e-7f49-11ed-b5bd-6595d9b17862"></iframe>
                                </div>
                                
                            </div>
                        </section>
                        <section className='e1 s4'>
                            <div className='section-wrapper scr-center'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                    <GlassMagnifier className='s4_gaiseiki' magnifierSize="10%"
                                        imageSrc={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_gaiseiki.png`}
                                        largeImageSrc={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_gaiseiki_zoom.png`}
                                    />
                                    {/* <img className='sticker' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/sticker-qt.svg`}/> */}

                            </div>
                        </section>
                        <section className='e1 s5'>
                            <div className='section-wrapper '>
                                <div className='infi-slider'>
                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_vagina.png`}/>
                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_vagina.png`}/>
                                </div>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>
                                <img className='img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_img.png`}/>

                                <div className='infi-slider'>
                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_penis.png`}/>
                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_penis.png`}/>
                                </div>
                            </div>
                        </section>
                        <section className='e1 s6'>
                            <div className='section-wrapper'>
                                <img className='img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_img.png`}/>
                                <div className='rt-container'>
                                    <div id="leaves">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i> 
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
