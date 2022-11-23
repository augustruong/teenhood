import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E3_shasei.css'

export default function E3_shasei(props) {
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [word, setWord] = useState("");

    return(
        <div>
            <PopUpModal word={word} showModal={showModal} setShowModal={setShowModal} />
            
            <div className='lesson-content__inner'>
                <MContext.Consumer>
                    {(context) => (
                        <ReactPageScroller
                            customPageNumber={context.state.currentPage}
                            renderAllPagesOnFirstRender={true}
                            onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                        >
                            <section className='e3 s1'>
                                <div className='section-wrapper flex-row'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei-1.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei-1.png`} 
                                    />
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei-2.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei-2.png `}
                                    />
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage1.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage1.png `}
                                    />
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage2.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage2.png`}
                                    />
                                </div>
                            </section>
                            <section className='e3 s2'>
                                <div className='section-wrapper flex-row'>
                                    {/* Double check title below */}
                                    {/* <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title2.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title2.png `}
                                    /> */}
                                    <Image classname=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_otoko-naiseiki.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_otoko-naiseiki.png`}
                                    />
                                    <div className='content'>
                                        <p>テキストの配置 <br/>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e3 s3'>
                                <div className='section-wrapper'>
                                    {/* Image size reduced by 50% to display other content */}
                                    <Image className='' style={{width: '50%'}}
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_musei.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_musei.png`} 
                                    />
                                    <div className='content'>
                                        <p>テキストの配置 <br/>
                                        </p>
                                    </div>
                                    <Image classname=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage3.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage3.png`}
                                    />
                                </div>
                            </section>
                            <section className='e3 s4'>
                                <div className='section-wrapper'>
                                    <Image className='' style={{width: '50%'}}
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_jii.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_jii.png`} 
                                    />
                                    <div className='content'>
                                        <p>テキストの配置 <br/>
                                        </p>
                                    </div>
                                    <Image classname=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage4.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_contentMessage4.png`}
                                    />
                                </div>
                            </section>
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

