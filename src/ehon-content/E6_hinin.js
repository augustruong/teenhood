import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../module/MyProvider';
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
                            <section className='e6 s1'>
                                <div className='section-wrapper flex-column'>
                                    <img className='s1_hinin' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_hinin.png`}/>
                                    <p className='block-msg'>案外妊娠にならないように<br/>ふたりをまもる！基本的な避妊法</p>
                                </div>
                            </section>
                            <section className='e6 s2'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <div className='content'>
                                        <img className='s2_wrong-methods'
                                            src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_wrong-methods.png`}
                                        />
                                        <div className='alert-wrapper'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content1.svg`} />
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content2.svg`} />
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content3.svg`} />
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_content4.svg`} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='e6 s3'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                        <p className='note'>
                                            「今は妊娠したくない」「今は子どもを持つことを考えていない」。<br/>
                                            そう思っている時に異性間で
                                            <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("性交")}}>セックス</span>
                                            をするなら、避妊が必要。<br/>
                                            <span className='keyword'>いずれも100％確実ではない。</span>しかし、組み合わせることで、より避妊効果は上がる。<br/>
                                            避妊は相手に任せたら絶対ダメ。二人でちゃんと話し合うために。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e6 s4'>
                                <div className='section-wrapper'>
                                    <img className='' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_content.png`}/>
                                    
                                </div>
                            </section>
                            <section className='e6 s5'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>
                                    <img className='condom-gif' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/condom.gif`}/>
                                </div>
                            </section>
                            <section className='e6 s6'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_title.svg`}/>
                                    <p className='block-msg'>
                                        「避妊をしなかった」「コンドームが破れた」「コンドームが外れてしまった」「ピル<br/>（経口避妊薬）を飲み忘れた」、そしてあってはいけないことだけれど、合意のない性交<br/>があったとき、<span className='keyword'>望まない妊娠を防止するために行う緊急避妊という方法があります。</span>
                                        </p>
                                    <div className='content flex-row'>
                                            <div className='box'>
                                                <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_image1.png`}/>
                                                <div className='box-content'>
                                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/kinkyuu-tag1.svg`}/>
                                                    <p className='block-msg'>
                                                    性交後<span className='keyword'>72時間以内（3日以内）</span>に服用しなければいけません。ただし、妊娠を100％防ぐことができるとは限らないことを覚えておきましょう。かかりつけの産婦人科がない人は、インターネットで「緊急避妊（モーニングアフターピル）」で検索して、問い合わせてみてください。
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='box'>
                                                <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s6_image2.png`}/>
                                                <div className='box-content'>
                                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/kinkyuu-tag2.svg`}/>
                                                    <p className='block-msg'>
                                                    子宮内の環境を変え、受精卵が子宮内膜に着床するのを妨げることで、妊娠を避けます。銅を付加したIUDだけが緊急避妊で使用できます。避妊効果は5年間続き、抜去（抜き去ること）により妊娠は可能となります。<span className='keyword'>性交後5日以内</span>の挿入が条件となり、思春期を過ぎれば出産経験は問いません。
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </section>
                            <section className='e6 s7'>
                                <div className='section-wrapper'>
                                    <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s7-pregnant.png`}/>
                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                        <p className='note'>
                                        妊娠は女性のからだにしか起こらないのです。緊急避妊をきっかけに、<br/>パートナーとこれからの避妊について前向きに考えていきましょう。
                                        </p>
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

