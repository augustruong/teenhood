import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E6_hinin.css'

export default function E6_hinin(props) {
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
                            pageOnChange={(number) => {context.visitedCurrentPage(number)}}
                        >
                            <section className='e6 s1'>
                                <div className='section-wrapper'>
                                    <img classname='s1-hinin'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_hinin.png`}
                                    />
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_content.svg`}/>
                                </div>
                            </section>
                            <section className='e6 s2'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <div classname='content'>
                                        <img classname='s2_wrong-methods'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_wrong-methods.png`}
                                        />
                                        <img classname='s2_content'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content1.png`}
                                        />
                                        <img classname='s2_content'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content2.png`}
                                        />
                                        <img classname='s2_content'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content3.png`}
                                        />
                                        <img classname='s2_content'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content4.png`}
                                        />
                                    </div>
                                </div>
                            </section>
                            <section className='e6 s3'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <img classname='s3_content'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content1.png`}
                                    />
                                    <img classname='s3_content'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content2.png`}
                                    />
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content3.svg`}/>
                                </div>
                            </section>
                            <section className='e6 s4'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                    <img classname='s4_content'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4-condom.png`}
                                    />
                                </div>
                            </section>
                            <section className='e6 s5'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>
                                    <div>
                                        <img classname='s5_content'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image1.png`}
                                        />
                                        <img classname='s5_content'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image2.png`}
                                        />
                                        <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_content1.svg`}/>
                                        <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_content2.svg`}/>
                                    </div>
                                    <img classname='s5_content'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5-pregnant.png`}
                                    />
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_content3.svg`}/>
                                </div>
                            </section>

                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

