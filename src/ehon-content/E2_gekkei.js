import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E2_gekkei.css'
import { useTheme } from 'styled-components';

export default function E2_gekkei(props) {
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [word, setWord] = useState("");
    const [s3Page,setS3Page] = useState(1)

    return(
        <div>
            <PopUpModal word={word} showModal={showModal} setShowModal={setShowModal} />

            <div className='lesson-content__inner'>
                <MContext.Consumer>
                    {(context) => (
                        <ReactPageScroller>
                            <section className='e2 s1'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.svg`}/>
                                    <img className='s1_gekkei' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_gekkei.png`}/>
                                    <div className='note-wrapper n1'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-とは.svg`}/>
                                        <p className='note'>
                                        女性は大人になると、だいたい<span>毎月1回、約3〜7日間、</span><br/>
                                        自分の意思とは関係なく、性器から血液等が外に出す。<br/>
                                        50歳くらいまで、この現象と付き合うことになる。
                                        </p>
                                    </div>
                                    <div className='note-wrapper n2'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-いつ.svg`}/>
                                        <p className='note'>
                                        初めて起こる月経のことを「初経（初潮）」という。<br/>
                                        初潮を10～12歳くらいに迎える人が多い。<br/>
                                        もし、15歳になっても来ない場合は婦人科を受診しよう。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s2'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    <img className='s2_naiseiki' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_naiseiki.png`}/>
                                </div>
                            </section>
                            <section className='e2 s3'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <div className='slider-wrapper'>
                                        <div className='slider-img-wrapper'>
                                            <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_gekkei-${s3Page}.png`}/>
                                        </div>
                                        <div className='slider-content-wrapper'>
                                            <div className='pagination'>
                                                <div className={s3Page===1 ? 'pagination-item active' : 'pagination-item'} onClick={() => setS3Page(1)}>1</div>
                                                <div style={{display: "inline-block", color: "var(--red-color)", fontWeight: "800"}}>--------</div>
                                                <div className={s3Page===2 ? 'pagination-item active' : 'pagination-item'} onClick={() => setS3Page(2)}>2</div>
                                                <div style={{display: "inline-block", color: "var(--red-color)", fontWeight: "800"}}>--------</div>
                                                <div className={s3Page===3 ? 'pagination-item active' : 'pagination-item'} onClick={() => setS3Page(3)}>3</div>
                                                <div style={{display: "inline-block", color: "var(--red-color)", fontWeight: "800"}}>--------</div>
                                                <div className={s3Page===4 ? 'pagination-item active' : 'pagination-item'} onClick={() => setS3Page(4)}>4</div>
                                            </div>
                                            {s3Page === 1 &&
                                            <div className='content'>
                                                <h3 className='bold' style={{color: "var(--red-color)", marginBottom: "10px"}}>生理後の子宮</h3>
                                                <p>卵巣で、赤ちゃんのもとになる卵子が成長。</p>
                                            </div>
                                            }
                                            {s3Page === 2 &&
                                            <div className='content'>
                                                <h3 className='bold' style={{color: "var(--red-color)", marginBottom: "10px"}}>排卵</h3>
                                                <p>成長した卵子が卵巣からとび出し、卵管にすい上げられて子宮へ。左右どちらの卵巣から排卵するかはきまってない。ふしぎ？</p>
                                            </div>
                                            }
                                            {s3Page === 3 &&
                                            <div className='content'>
                                                <h3 className='bold' style={{color: "var(--red-color)", marginBottom: "10px"}}>生理前</h3>
                                                <p>ベッドになる内膜が 1cm ほどに厚くなり、赤ちゃんがくるのを待つ。卵子は「精子」とであうと、２つは１つとなり、「受精卵」となる。受精卵は赤ちゃんのはじめ。</p>
                                            </div>
                                            }
                                            {s3Page === 4 &&
                                            <div className='content'>
                                                <h3 className='bold' style={{color: "var(--red-color)", marginBottom: "10px"}}>生理中</h3>
                                                <p>いらなくなった内膜がはがれ、たくわえられていた血液といっしょにからだの外へ。</p>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s4'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_title.svg`}/>
                                    <div className='content-wrapper'>
                                        <img className='' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s4_shock.png`}/>
                                        <p>月経がはじまる前や、月経のとき、<br/>人によっていろいろな<span>からだの変化</span><br/>がおこることがある。</p>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s5'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_title.png`}/>

                                </div>

                                <div className='tunnel-container'>
                                    <div className='circles tunnel-anim' style={{'--delay': 5}}></div>
                                    <div className='circles tunnel-anim' style={{'--delay': 4}}></div>
                                    <div className='circles tunnel-anim' style={{'--delay': 3}}></div>
                                    <div className='circles tunnel-anim' style={{'--delay': 2}}></div>
                                    <div className='circles tunnel-anim' style={{'--delay': 1}}></div>
                                    <div className='circles tunnel-anim' style={{'--delay': 0}}></div>
                                </div>
                            </section>
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

