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
                            pageOnChange={(number) => {context.visitedCurrentPage(number)}}
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
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <div className='content'>
                                        <div className='groupItem flex-row'>
                                            <img className='number' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item1.svg`}/>
                                            <img className='item' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-growing.svg`}/>
                                        </div>
                                        <div className='groupItem flex-row'>
                                            <img className='number' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item2.svg`}/>
                                            <img className='item' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-sex.svg`}/>
                                        </div>
                                        <div className='groupItem flex-row'>
                                            <img className='number' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item3.svg`}/>
                                            <img className='item' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-pregnant.svg`}/>
                                        </div>
                                        <div className='groupItem flex-row'>
                                            <img className='number' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_item4.svg`}/>
                                            <img className='item' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-birth.svg`}/>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='e5 s3'>
                                <div className='section-wrapper'>
                                    <img className='stage' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/sticker-思春期.svg`}/>
                                    <div className='box-content flex-row'>
                                        <div className='group flex-column'>
                                            <div className='e5_round-img'>
                                                <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_gekkei.png`} />
                                                <div class="shadow"></div>
                                            </div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-female.svg`}/>
                                            <p className='e5_note'>
                                                8~13歳で女性の<span className='keyword'>月経（生理）</span><br/>がはじまるおよそ月に一度卵巣<br/>から出てきた卵子
                                            </p>
                                        </div>
                                        <div className='group flex-column'>
                                            <div className='e5_round-img'>
                                                <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_shasei.png`} />
                                                <div class="shadow"></div>
                                            </div>
                                            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/i-male.svg`}/>
                                            <p className='e5_note'>
                                                12~16歳で男性は精巣で<br/>精子が作られ始める<span className='keyword'>射精</span><br/>の時精液が外へ出てくる
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='e5 s4'>
                                <div className='section-wrapper'>
                                    <img className='stage' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/sticker-性交.svg`}/>
                                    <div className='box-content flex-row'></div>
                                    <p className='e5_note'> 
                                        <span className='keyword'>性交している二人</span><br/>ペニスからちつへ精液を送る、精子はちつを通って<br/>子宮に入る卵子に引き寄せられる
                                    </p>
                                </div>
                            </section>

                            <section className='e5 s5'>
                                <div className='section-wrapper'>
                                    <img className='stage' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/sticker-妊娠.svg`}/>

                                    <div className='box-content flex-row'>
                                        <div className='group flex-column'>
                                            <div className='e5_round-img'>
                                                <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image1.png`} />
                                                <div class="shadow"></div>
                                            </div>
                                            <img className='img-desc' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image1_description.svg`}/>
                                        </div>
                                        <div className='group flex-column'>
                                            <div className='e5_round-img'>
                                                <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image2.png`} />
                                                <div class="shadow"></div>
                                            </div>
                                            <img className='img-desc' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_image2_description.svg`}/>
                                        </div>
                                    </div>
                                    <p className='e5_note'> 
                                        <span className='keyword'>精子と卵子が出会う</span>ことでできる<br/>
                                        子宮で必要なえいようをもらってからだ発達していく<br/>
                                        <span className='keyword'>胎児は約９か月</span>かけて生まれる準備する
                                    </p>
                                </div>
                            </section>

                            <section className='e5 s6'>
                                <div className='section-wrapper'>
                                    <img className='stage' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_title.svg`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/sticker-生産.svg`}/>
                                    <div className='box-content flex-row'></div>
                                    <p className='e5_note'>赤ちゃんが生まれてくる</p>
                                </div>
                            </section>
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

