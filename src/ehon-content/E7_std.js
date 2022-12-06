import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../module/MyProvider';

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E7_std.css'

export default function E7_std(props){
    const thisLesson = EhonData[props.index];

    return(
        <div>
            <div className='lesson-content__inner'>
                <MContext.Consumer>
                    {(context) =>(
                        <ReactPageScroller
                        // customPageNumber={context.state.currentPage}
                        // onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                            >
                            <section className='e7 s1'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.png`}/>
                                    
                                </div>
                                <div className='content-text'>
                                    <p className='content-title'>とは何?</p>
                                    <p className ='main-content'><span>セックスをはじめとする性行為などによって感染する病気
                                    STI</span>ともいう。<span>STI</span>とは、<span>SexuallyTransmitted Infections</span>の略称で、性感染症のことを指す。</p>
                                </div>

                                <div className='content-image'>
                                    <img className='content-title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/kansenroudou.png`}/>
                                    <ul className='main-content'>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 75.png`}/>
                                            <p>腟性交</p>
                                        </li>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 76.png`}/>
                                            <p>肛門性交</p>
                                        </li>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 77.png`}/>
                                            <p>口腔性交</p>
                                        </li>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 78.png`}/>
                                            <p>下着、タオル便器など</p>
                                        </li>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 79.png`}/>
                                            <p>口の粘膜や皮膚の傷</p>
                                        </li>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 80.png`}/>
                                            <p>母子感染</p>
                                        </li>
                                        <li className='main-wrapper'>
                                            <img className = "icons" src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/Ellipse 81.png`}/>
                                            <p>注射針の回し打ち</p>
                                        </li>
                                    </ul>
                                </div>
                                
                               
                            </section>   
                            <section className='e7 s2'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.png`}/>
                                </div>
                            </section>   
              



                        </ReactPageScroller>


                    ) }


                </MContext.Consumer>
            </div>



        </div>
    )

}