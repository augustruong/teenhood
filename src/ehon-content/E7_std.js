import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { PopUpModal } from '../components/modals/PopUpModal'
import { MContext } from '../module/MyProvider';
import { Link } from 'react-router-dom';

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E7_std.css'

export default function E7_std(props){
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [virus, setVirus] = useState("");

    return(
        <div>
            <PopUpModal type={"virus"} word={virus} showModal={showModal} setShowModal={setShowModal} />

            <div className='lesson-content__inner'>
                <MContext.Consumer>
                    {(context) =>(
                        <ReactPageScroller
                            customPageNumber={context.state.currentPage}
                            renderAllPagesOnFirstRender={true}
                            onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                            pageOnChange={(number) => {context.visitedCurrentPage(number)}}
                            >
                            <section className='e7 s1'>
                                <div className='section-wrapper flex-column scr-center'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.png`}/>
                                    
                                    <div className='note-wrapper n1'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-とは.svg`}/>
                                        <p className='note'>
                                            <span className='keyword'>セックスをはじめとする性行為などによって感染する病気</span><br/>
                                            <span className='keyword'>STI</span>ともいう。<span className='keyword'>STI</span>とは、<span className='keyword'>Sexually Transmitted Infections</span><br/>の略称で、性感染症のことを指す。
                                        </p>
                                    </div>

                                    <div className='note-wrapper n2'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-感染経路.svg`}/>
                                        <p className='note'>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-sex.png`}/>
                                                <p>腟性交</p>
                                            </li>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-butt.png`}/>
                                                <p>肛門性交</p>
                                            </li>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-oral.png`}/>
                                                <p>口腔性交</p>
                                            </li>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-pantsu.png`}/>
                                                <p>下着、タオル便器など</p>
                                            </li>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-kiss.png`}/>
                                                <p>口の粘膜や皮膚の傷</p>
                                            </li>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-parent.png`}/>
                                                <p>母子感染</p>
                                            </li>
                                            <li className='icon-wrapper'>
                                                <img className = "icon" src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-injection.png`}/>
                                                <p>注射針の回し打ち</p>
                                            </li>
                                        </p>
                                    </div>
                                </div>
                               
                            </section>   
                            <section className='e7 s2'>
                                <div className='section-wrapper flex-column scr-center'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <div className='subtitle' >気になる性感染症を選んでね！</div>
                                
                                    <div className='virus-wrapper flex-row'>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("梅毒")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/梅毒.png`}/>
                                            <div className='virus-name'>梅毒</div>
                                        </div>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("性器クラミジア")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/性器クラミジア.png`}/>
                                            <div className='virus-name'>クラミジア</div>
                                        </div>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("淋菌感染症")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/淋菌感染症.png`}/>
                                            <div className='virus-name'>淋菌感染症</div>
                                        </div>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("性器カンジダ感染症")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/性器カンジダ感染症.png`}/>
                                            <div className='virus-name'>性器カンジダ症</div>
                                        </div>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("尖圭コンジローマ")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/尖圭コンジローマ.png`}/>
                                            <div className='virus-name'>尖圭コンジ<br/>ローマ</div>
                                        </div>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("トリコモナス症")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/トリコモナス症.png`}/>
                                            <div className='virus-name'>トリコモナス症</div>
                                        </div>
                                        <div className='virus' onClick={() => {setShowModal(!showModal); setVirus("HIV・エイズ感染症")}}>
                                            <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/HIV・エイズ感染症.png`}/>
                                            <div className='virus-name'>HIV・エイズ<br/>感染症</div>
                                        </div>
                                    </div>
                                </div>
                            </section>  
                            <section className='e7 s3'>
                                <div className='section-wrapper flex-column scr-center'>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_condom.png`}/>
                                        <Link to={`/ehon/e6_hinin/content`}>
                                            <button>コンドームの使い方</button>
                                        </Link>
                                </div> 
                            </section>
                            <section className='owari'>
                                <h3>最後の絵本でした！</h3>
                            </section>


                        </ReactPageScroller>


                    ) }


                </MContext.Consumer>
            </div>



        </div>
    )

}