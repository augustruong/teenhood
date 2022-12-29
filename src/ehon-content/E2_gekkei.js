import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import { Stage, Sprite, Texture, render } from '@inlet/react-pixi'
import { MContext } from '../module/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E2_gekkei.css'
import { useTheme } from 'styled-components';

import 子宮_front from './images/e2_gekkei/s2_front-子宮.svg'
import 子宮_front_hv from './images/e2_gekkei/s2_front-hv-子宮.svg'
import 卵管_front from './images/e2_gekkei/s2_front-卵管.svg'
import 卵管_front_hv from './images/e2_gekkei/s2_front-hv-卵管.svg'
import 卵子_front from './images/e2_gekkei/s2_front-卵子.svg'
import 卵子_front_hv from './images/e2_gekkei/s2_front-hv-卵子.svg'
import 卵巣_front from './images/e2_gekkei/s2_front-卵巣.svg'
import 卵巣_front_hv from './images/e2_gekkei/s2_front-hv-卵巣.svg'
import ちつ_front from './images/e2_gekkei/s2_front-ちつ.svg'
import ちつ_front_hv from './images/e2_gekkei/s2_front-hv-ちつ.svg'

import 子宮_side from './images/e2_gekkei/s2_side-子宮.svg'
import 子宮_side_hv from './images/e2_gekkei/s2_side-hv-子宮.svg'
import 卵管_side from './images/e2_gekkei/s2_side-卵管.svg'
import 卵管_side_hv from './images/e2_gekkei/s2_side-hv-卵管.svg'
import 卵子_side from './images/e2_gekkei/s2_side-卵子.svg'
import 卵子_side_hv from './images/e2_gekkei/s2_side-hv-卵子.svg'
import 卵巣_side from './images/e2_gekkei/s2_side-卵巣.svg'
import 卵巣_side_hv from './images/e2_gekkei/s2_side-hv-卵巣.svg'
import ちつ_side from './images/e2_gekkei/s2_side-ちつ.svg'
import ちつ_side_hv from './images/e2_gekkei/s2_side-hv-ちつ.svg'
import 肛門_side from './images/e2_gekkei/s2_side-肛門.svg'
import 肛門_side_hv from './images/e2_gekkei/s2_side-hv-肛門.svg' 

export default function E2_gekkei(props) {
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [word, setWord] = useState("");
    const [s2Page,setS2Page] = useState(1)
    const [s3Page,setS3Page] = useState(1)
    let scale = { x: 1, y: 1 }

    const [imgFront子宮,setImgFront子宮] = useState(子宮_front)
    const [imgFront卵管,setImgFront卵管] = useState(卵管_front)
    const [imgFront卵子,setImgFront卵子] = useState(卵子_front)
    const [imgFront卵巣,setImgFront卵巣] = useState(卵巣_front)
    const [imgFrontちつ,setImgFrontちつ] = useState(ちつ_front)

    const [imgSide子宮,setImgSide子宮] = useState(子宮_side)
    const [imgSide卵管,setImgSide卵管] = useState(卵管_side)
    const [imgSide卵子,setImgSide卵子] = useState(卵子_side)
    const [imgSide卵巣,setImgSide卵巣] = useState(卵巣_side)
    const [imgSideちつ,setImgSideちつ] = useState(ちつ_side)
    const [imgSide肛門,setImgSide肛門] = useState(肛門_side)

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
                            <section className='e2 s1'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.png`}/>
                                    <img className='s1_gekkei' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_gekkei.png`}/>
                                    <div className='infi-slider'>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_infislide.png`}/>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_infislide.png`}/>
                                    </div>
                                    <div className='note-wrapper n1'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-とは.svg`}/>
                                        <p className='note'>
                                        女性は大人になると、だいたい<span className='keyword'>毎月1回、約3〜7日間、</span><br/>
                                        自分の意思とは関係なく、性器から血液等（
                                            <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("経血")}}>経血</span>
                                        ）が外に出す。<br/>
                                        50歳くらいまで、この現象と付き合うことになる。
                                        </p>
                                    </div>
                                    <div className='note-wrapper n2'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-いつ.svg`}/>
                                        <p className='note'>
                                        初めて起こる月経のことを
                                        <span className='keyword jishoword' onClick={() => {setShowModal(!showModal); setWord("初経")}}>「初経（初潮）」</span>
                                        という。<br/>
                                        初潮を<span className='keyword'>10~12歳くらい</span>に迎える人が多い。<br/>
                                        もし、15歳になっても来ない場合は婦人科を受診しよう。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s2'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>
                                    
                                    <div className='diagram-wrapper'>
                                        {s2Page === 1 && 
                                            <div className='front'>
                                                <Stage width={960} height={480} options={{backgroundColor: "#fff", antialias: true }}>
                                                    <Sprite width={400} height={400} x={280} y={70} image={process.env.PUBLIC_URL + `/images/ehon/e2_gekkei/s2_naiseiki-front.png`}/>
                                                    <Sprite width={50} height={242} x={457} image={imgFront子宮} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront子宮(子宮_front_hv)}}
                                                        pointerout={() => { setImgFront子宮(子宮_front)}}
                                                        pointerdown={() => { setWord("子宮"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={242} height={60} x={160} y={160} image={imgFront卵管} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront卵管(卵管_front_hv)}}
                                                        pointerout={() => { setImgFront卵管(卵管_front)}}
                                                        pointerdown={() => { setWord("卵管"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={257} height={48} x={160} y={238} image={imgFront卵子} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront卵子(卵子_front_hv)}}
                                                        pointerout={() => { setImgFront卵子(卵子_front)}}
                                                        pointerdown={() => { setWord("卵子"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={243.5} height={62.5} x={580} y={205} image={imgFront卵巣} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront卵巣(卵巣_front_hv)}}
                                                        pointerout={() => { setImgFront卵巣(卵巣_front)}}
                                                        pointerdown={() => { setWord("卵巣"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={340} height={48} x={480} y={300} image={imgFrontちつ} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFrontちつ(ちつ_front_hv)}}
                                                        pointerout={() => { setImgFrontちつ(ちつ_front)}}
                                                        pointerdown={() => { setWord("膣"); setShowModal(!showModal)}}
                                                    />
                                                </Stage>
                                            </div>
                                        }
                                        {s2Page === 2 && 
                                            <div className='side'>
                                                <Stage width={960} height={480} options={{backgroundColor: "#fff", antialias: true }}>
                                                    <Sprite width={400} height={400} x={280} y={70} image={process.env.PUBLIC_URL + `/images/ehon/e2_gekkei/s2_naiseiki-side.png`}/>
                                                    <Sprite width={50} height={256} x={457} image={imgSide子宮} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide子宮(子宮_side_hv)}}
                                                        pointerout={() => { setImgSide子宮(子宮_side)}}
                                                        pointerdown={() => { setWord("子宮"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={325} height={60} x={140} y={155} image={imgSide卵管} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide卵管(卵管_side_hv)}}
                                                        pointerout={() => { setImgSide卵管(卵管_side)}}
                                                        pointerdown={() => { setWord("卵管"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={330.5} height={48} x={140} y={216} image={imgSide卵子} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide卵子(卵子_side_hv)}}
                                                        pointerout={() => { setImgSide卵子(卵子_side)}}
                                                        pointerdown={() => { setWord("卵子"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={332.5} height={62.5} x={490} y={170} image={imgSide卵巣} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide卵巣(卵巣_side_hv)}}
                                                        pointerout={() => { setImgSide卵巣(卵巣_side)}}
                                                        pointerdown={() => { setWord("卵巣"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={340} height={48} x={478} y={300} image={imgSideちつ} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSideちつ(ちつ_side_hv)}}
                                                        pointerout={() => { setImgSideちつ(ちつ_side)}}
                                                        pointerdown={() => { setWord("膣"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={270.5} height={48} x={550} y={235} image={imgSide肛門} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide肛門(肛門_side_hv)}}
                                                        pointerout={() => { setImgSide肛門(肛門_side)}}
                                                        pointerdown={() => { setWord("肛門"); setShowModal(!showModal)}}
                                                    />
                                                </Stage>
                                            </div>
                                        }
                                        <nav>
                                            <ul>
                                                <li className={s2Page===1 ? 'active' : ''} onClick={() => setS2Page(1)}>正面</li>
                                                <li className={s2Page===2 ? 'active' : ''} onClick={() => setS2Page(2)}>側面</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s3'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_title.svg`}/>
                                    <div className='slider-wrapper'>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s3_gekkei-${s3Page}.png`}/>
                                        
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
                                                <p>
                                                    <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("卵巣")}}>卵巣</span>
                                                    で、赤ちゃんのもとになる
                                                    <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("卵巣")}}>卵子</span>
                                                    が成長。</p>
                                            </div>
                                            }
                                            {s3Page === 2 &&
                                            <div className='content'>
                                                <h3 className='bold jishoword' style={{color: "var(--red-color)", marginBottom: "10px"}} onClick={() => {setShowModal(!showModal); setWord("排卵")}}>排卵</h3>
                                                <p>成長した卵子が卵巣からとび出し、
                                                    <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("卵管")}}>卵管</span>
                                                    にすい上げられて子宮へ。左右どちらの卵巣から排卵するかはきまってない。ふしぎ？</p>
                                            </div>
                                            }
                                            {s3Page === 3 &&
                                            <div className='content'>
                                                <h3 className='bold' style={{color: "var(--red-color)", marginBottom: "10px"}}>生理前</h3>
                                                <p>ベッドになる内膜が 1cm ほどに厚くなり、赤ちゃんがくるのを待つ。卵子は
                                                    <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("精子")}}>「精子」</span>
                                                    とであうと、２つは１つとなり、
                                                    <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("受精卵")}}>「受精卵」</span>となる。受精卵は赤ちゃんのはじめ。
                                                </p>
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
                                    
                                    <div className='spin-wrapper'>
                                        <img className='item' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_angry.png`}/>
                                        <img className='item' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_pain.png`}/>
                                        <img className='item' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_stomache.png`}/>
                                        <img className='item' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_headache.png`}/>
                                        <img className='item' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_sleepy.png`}/>
                                        <img className='item' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s5_nikibi.png`}/>
                                    </div>
                                    
                                    <div className={context.state.currentPage === 4 ? 'tunnel-container':''}>
                                        <div className='circles tunnel-anim' style={{'--delay': 5}}></div>
                                        <div className='circles tunnel-anim' style={{'--delay': 4}}></div>
                                        <div className='circles tunnel-anim' style={{'--delay': 3}}></div>
                                        <div className='circles tunnel-anim' style={{'--delay': 2}}></div>
                                        <div className='circles tunnel-anim' style={{'--delay': 1}}></div>
                                        <div className='circles tunnel-anim' style={{'--delay': 0}}></div>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s6'>
                                <div className='section-wrapper scr-center'>
                                    <div className='note-wrapper n1'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-PMS.svg`}/>
                                        <p>
                                            月経の3~7日前に起こる
                                            <span className='jishoword keyword' onClick={() => {setShowModal(!showModal); setWord("PMS")}}>「月経前症候群（PMS）」</span>
                                            は、腹痛や胸の張り、<br/>
                                            イライラや気分の落ち込みなどの不快な症状のこと。これは、女性ホルモン<br/>
                                            のえいきょう。どれも病気ではない。
                                        </p>
                                    </div>
                                    <div className='note-wrapper n2'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-生理痛.svg`}/>
                                        <p>
                                            <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("子宮")}}>子宮</span>
                                            の収縮によっておなかがいたくなる。<br/>全然いたくない人もいる。</p>
                                    </div>
                                    <div className='note-wrapper n3'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                        <p>このような症状が<br/>
                                            <span className='keyword' style={{fontSize: "25px"}}>３回続けて</span><br/>
                                            起こっていれば<br/>
                                            <span className='keyword'>PMS</span>
                                            かもしれない
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s7'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s7_title.svg`}/>
                                    <div className='flex-row'>
                                        <div className='flex-column'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s7_meal.png`}/>
                                            <p>日ごろからバランス<br/>の良い食事をする</p>
                                        </div>
                                        <div className='flex-column'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s7_keepwarm.png`}/>
                                            <p>おなかを温める</p>
                                        </div>
                                        <div className='flex-column'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s7_stretch.png`}/>
                                            <p>適度な体操をする</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s8'>
                                <div className='section-wrapper'>
                                    <img className='s8_konnan' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s8_konnan.png`}/>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s8_title.svg`}/>
                                    <p>
                                    休みたくなる、薬を飲まないとしんどいほどの痛みがある場合、<br/><span className='keyword'>「月経困難症」</span>かもしれない。子宮内膜症や子宮筋腫など病気が隠れていることもあり、その結果、機能性不妊になる可能性も。
                                    </p>
                                    <div className='note-wrapper'>
                                        <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                        <p>もし心配なことがあれば、おうちの人や保健室の先生に相談しよう。</p>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s9'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s9_title.svg`}/>
                                    <div className='flex-row'>
                                        <img className='' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s9_napkin.png`}/>
                                        <div className='content-wrapper'>
                                            <div className='napkin'>ナプキン</div>
                                            <p>月経になったら、洋服や下着をよごらないように、
                                            <span className='jishoword' onClick={() => {setShowModal(!showModal); setWord("ナプキン")}}>生理用ナプキン</span>
                                                をちつ口にあてて、生理用のショーツをはく。<br/>
                                            ナプキンは、だいたい<span className='keyword'>2〜3時間に1度</span>、<br/>トイレに行くたびにとりかえよう。</p>
                                        </div>
                                    </div>
                                    <div className='flex-row'>
                                        <div className='note-wrapper'>
                                            <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-!.svg`}/>
                                            <p>寝る時以外は、同じナプキンを6時間以上つけないようにしよう。不衛生になるし、かぶれることがある。</p>
                                        </div>
                                        <div className='note-wrapper'>
                                            <img className='stamp' src={process.env.PUBLIC_URL + `/icons-stamps/${thisLesson.lessonId}/stamp-貼り方.svg`}/>
                                            <img className='' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s9_napkin-howto.png`}/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s10'>
                                <div className='section-wrapper'>
                                    <div className='flex-row'>
                                        <img className='' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s10_calendar.png`}/>
                                        <div className='content-wrapper'>
                                            <div className='calendar'>カレンダー</div>
                                            <p>自分のリズムを知るために、月経の日に<br/>しるしをつける習慣をつけよう。</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='e2 s11'>
                                <div className='section-wrapper scr-center'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s11_title.svg`}/>
                                    <div className='flex-row'>
                                        <div className='manner'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s11_toilet.png`}/>
                                            <p>ナプキンは、トイレに流さない</p>
                                        </div>
                                        <div className='manner'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s11_check.png`}/>
                                            <p>トイレはきれいに</p>
                                        </div>
                                        <div className='manner'>
                                            <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s11_laundry.png`}/>
                                            <p>下着のお洗濯は、自分で</p>
                                        </div>
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

