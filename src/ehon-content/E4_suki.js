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
                                    <img className='s1_bg' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_bg.png`}/>
                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-好き.svg`}/>
                                        <p className='note'>
                                            <span className='keyword'>すきっていう気持ちには、さまざまの形がある。</span><br/>
                                            相手のいいところや、自分とちがうところに気づいたり、<br/>だれかにあこがれたりすること。<br/>
                                            自分と違う性別の人を好きになることもあれば、<br/>自分と同じ性別の人を好きになることもある。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e4 s2'>
                                <div className='section-wrapper'>
                                    <img className='s2_omoiyari' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_omoiyari.png`}/>
                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-思いやり.svg`}/>
                                        <p className='note'>
                                            <span className='keyword'>人の気持ちをかんがえること</span><br/>
                                            相手が「いやだ」と思うことを、言ったり、やったりすることは「いじめ」っていうんだ。<br/>
                                            君は、ただふざけているつもりでも、相手はすごくきずついているかもしれないよ。<br/>
                                            → 自分のいいたこと、したことで、相手はどんな気持ちになるか、大切にしよう！
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e4 s3'>
                                <div className='section-wrapper flex-column scr-center'>
                                    <img className='s3_hands' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_hands.png`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <div className='p-content'>
                                        <p>
                                        もし、その人の前にでると、どきどきしてうまくしゃべれない。<br/>
                                        目が合うと赤くなったり… いつも、そのひとと一緒にいたい、話したい、合いたい…<br/>
                                        それは<span className='keyword'>「大好き」「愛している」「愛されたい」</span>という気持ちになる。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e4 s4'>
                                <div className='section-wrapper flex-column scr-center'>
                                    <img className='s4_cupcake' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_cupcake.png`}/>
                                    <div className='p-content'>
                                        <p>
                                        <span className='keyword'>私たちの基本はカップルではなく、個人です。</span> <br/>
                                        恋愛に興味があってもいいし、なくてもいい。<br/>
                                        好きな人がいてもいいし、いなくてもいい。<br/>
                                        片思いでも両想いでもいい。<br/>
                                        恋をしていなければおかしい年齢などもありません。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e4 s5'>
                                <div className='section-wrapper flex-column scr-center'>
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

