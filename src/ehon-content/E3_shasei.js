import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../module/MyProvider';
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
                            <section className='e3 s1'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.svg`}/>
                                    <img className='s1_shasei1'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei1.png`}
                                    />
                                    <img className='s1_shasei2'
                                        src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei2.png`}
                                    />
                                    <div className='note-wrapper n1'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-とは.svg`}/>
                                        <p className='note'>
                                        <span className='keyword'>精子がまざった精液が出ること。</span><br/>
                                        精巣でつくられた精子は、ぼっきしたペニスをとおってから、<br/>からだの外へとびだす。白くて少しねばりけがある。
                                        </p>
                                    </div>
                                    <div className='note-wrapper n2'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-いつ.svg`}/>
                                        <p className='note'>
                                        初めての射精は<span className='keyword'>「精通」</span>という。<br/>
                                        精通は11歳ぐらいからありますが、人によって早いとか遅いとか<br/>心配はいらない。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e3 s2'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <img classname='img' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_otoko-naiseiki.png`}/>
                                    <div className='moji'>
                                        <div className='s2_ぼうこう' onClick={() => {setShowModal(!showModal); setWord("膀胱")}}></div>
                                        <div className='s2_尿道' onClick={() => {setShowModal(!showModal); setWord("尿道")}}></div>
                                        <div className='s2_精巣' onClick={() => {setShowModal(!showModal); setWord("精巣")}}></div>
                                        <div className='s2_ペニス' onClick={() => {setShowModal(!showModal); setWord("ペニス")}}></div>
                                        <div className='s2_精管' onClick={() => {setShowModal(!showModal); setWord("精管")}}></div>
                                        <div className='s2_肛門' onClick={() => {setShowModal(!showModal); setWord("肛門")}}></div>
                                    </div>
                                </div>
                            </section>
                            <section className='e3 s3'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>

                                    <div className='content'>
                                        <p> <span className='keyword'>ねむっている間に射精をすること。</span><br/>
                                            たいていは夢を見ているで、<span className='keyword'>「夢精」</span>という。<br/>
                                            朝おきてパンツがぬるいている。<br/>
                                            また、朝おきるまえに、ときどき<span className='keyword'>「朝立ち」</span><br/>
                                            といって、ペニスがぼっきすることがある。<br/>
                                            これは、元気な男の子ならだれにもあること。<br/>
                                            おしっこをすれば、ペニスはすぐ小さくなる。
                                        </p>
                                    </div>

                                    <img className='s3_kiss' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_kiss.png`}/>

                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                        <p className='note'>
                                            すぐ下着をとりかえして、<br/>自分であらいましょう。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className='e3 s4'>
                                <div className='section-wrapper flex-row'>
                                    <div className='content-wrapper'>
                                        <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                        <div className='content'>
                                            <p>
                                            エッチなものを見たり想像したりすると、<br/>
                                            <span className='keyword'>★</span>じるしのあっちこっちから命令が出て、<br/>
                                            <span className='keyword'>ペニスの中に血液がどっと流れ込む。</span><br/>
                                            それで、かたく大きくなって立つわけだ。<br/>
                                            これは<span className='keyword'>「ぼっき」</span>というんだ。
                                            </p>
                                        </div>
                                    </div>
                                    <img className='s4_bokki' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_bokki.png`}/>
                                </div>
                            </section>

                            <section className='e3 s5'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.svg`}/>

                                    <div className='content'>
                                        <p> <span className='keyword'>「自分の性器をさわっているうちに、いいきもちになること」</span><br/>
                                            マスタベーション、オナニーともいう。<br/>
                                            自慰は男女ともに、自分のからだを自分で愛し、自然な行為だ。<br/>
                                            自慰をするかしないかは、自分で決めること。
                                        </p>
                                    </div>
                                    <img className='s5_moon' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_moon.png`}/>

                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                        <p className='note'>
                                            自慰をしすぎると頭が悪く<br/>なるなんて、そんなこと<br/>は絶対にありませんよ。
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

