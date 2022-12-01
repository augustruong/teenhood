import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E5_akachan.css'

export default function E5_akachan(props) {
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
                            <section className='e5 s1'>
                                <div className='section-wrapper flex-row'>
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/baby-doko-1.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/baby-doko-1.png`} 
                                    />
                                </div>
                            </section>

                            <section className='e5 s2'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                <div className='content'>
                                    <div className='groupItem'>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item.svg`}/>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item1.svg`}/>
                                        <img className=''
                                            src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-growing.svg`}

                                        />
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item1_description.svg`}/>
                                    </div>
                                    <div className='groupItem'>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item.svg`}/>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item2.svg`}/>
                                        <img className=''
                                            src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-sex.svg`}

                                        />
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item2_description.svg`}/>
                                    </div>
                                    <div className='groupItem'>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item.svg`}/>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item3.svg`}/>
                                        <img className=''
                                            src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-pregnant.svg`}
                                        />
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item3_description.svg`}/>
                                    </div>
                                    <div className='groupItem'>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item.svg`}/>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item4.svg`}/>
                                        <img className=''
                                            src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-birth.svg`}
                                        />
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item4_description.svg`}/>
                                    </div>
                                </div>
                            </section>

                            <section className='e5 s3'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content_title.svg`}/>
                                <div className='groupS3'>
                                    <div className='group'>
                                        <Image className=''
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_gekkei.png`}
                                        />
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content1.svg`}/>
                                    </div>
                                    <div className='group'>
                                        <Image className=''
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_shasei.png`}
                                        />
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_content2.svg`}/>
                                    </div>
                                </div>
                            </section>

                            <section className='e5 s4'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_content_title.svg`}/>
                                <Image className=''
                                    src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_sex.png`}
                                    webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_sex.png`} 
                                />
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_content.svg`}/>
                            </section>

                            <section className='e5 s5'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_content_title.svg`}/>
                                <div className='content-image'>
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image1.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image1.png`} 
                                    />
                                    <Image className=''
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image2.png`}
                                        webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image2.png`} 
                                    />
                                </div>
                                <div className='image-description'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image1_description.svg`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image2_description.svg`}/>
                                </div>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_contentsvg`}/>

                            </section>

                            <section className='e5 s6'>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_title.svg`}/>
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_content_title.svg`}/>
                                <Image className=''
                                    src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_birth.png`}
                                    webp={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_birth.png`} 
                                />
                                <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_content.svg`}/>
                            </section>
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

