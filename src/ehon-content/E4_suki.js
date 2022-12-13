import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../module/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E4_suki.css'

export default function E4_suki(props) {
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [word, setWord] = useState("");

    return(
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
                            <section className='e4 s1'>
                                <div className='section-wrapper'>
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_content.svg`}/>
                                    <img className='s1_suki' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_suki.png`}/>
                                </div>
                            </section>
                            <section className='e4 s2'>
                                <div className='section-wrapper'>
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content.svg`}/>
                                    <img className='s2_omoiyari' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_omoiyari.png`}/>
                                </div>
                            </section>
                            <section className='e4 s3'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content.svg`}/>
                                    <img className='s3_hands' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_hands.png`}/>
                                </div>
                            </section>
                            <section className='e4 s4'>
                                <div className='section-wrapper'>
                                    <img className='content' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_content.svg`}/>
                                    <img className='s4_cupcake' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_cupcake.png`}/>
                                </div>
                            </section>
                            <section className='e4 s5'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>
                                    <img className='s5_loveyourself' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_loveyourself.png`}/>
                                </div>
                            </section>
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

