import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import { Stage, Sprite, Texture, render } from '@inlet/react-pixi'
import { MContext } from '../module/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'
import LessonThumb from '../components/LessonThumb';

import './Ehon.css'
import './E3_shasei.css'

import ぼうこう_front from './images/e3_shasei/s2_front-ぼうこう.svg'
import ぼうこう_front_hv from './images/e3_shasei/s2_front-hv-ぼうこう.svg'
import 尿道_front from './images/e3_shasei/s2_front-尿道.svg'
import 尿道_front_hv from './images/e3_shasei/s2_front-hv-尿道.svg'
import 精巣_front from './images/e3_shasei/s2_front-精巣.svg'
import 精巣_front_hv from './images/e3_shasei/s2_front-hv-精巣.svg'
import ペニス_front from './images/e3_shasei/s2_front-ペニス.svg'
import ペニス_front_hv from './images/e3_shasei/s2_front-hv-ペニス.svg'
import 精管_front from './images/e3_shasei/s2_front-精管.svg'
import 精管_front_hv from './images/e3_shasei/s2_front-hv-精管.svg'
import 精子_front from './images/e3_shasei/s2_front-精子.svg'
import 精子_front_hv from './images/e3_shasei/s2_front-hv-精子.svg'

import ぼうこう_side from './images/e3_shasei/s2_side-ぼうこう.svg'
import ぼうこう_side_hv from './images/e3_shasei/s2_side-hv-ぼうこう.svg'
import 尿道_side from './images/e3_shasei/s2_side-尿道.svg'
import 尿道_side_hv from './images/e3_shasei/s2_side-hv-尿道.svg'
import 精巣_side from './images/e3_shasei/s2_side-精巣.svg'
import 精巣_side_hv from './images/e3_shasei/s2_side-hv-精巣.svg'
import ペニス_side from './images/e3_shasei/s2_side-ペニス.svg'
import ペニス_side_hv from './images/e3_shasei/s2_side-hv-ペニス.svg'
import 精管_side from './images/e3_shasei/s2_side-精管.svg'
import 精管_side_hv from './images/e3_shasei/s2_side-hv-精管.svg'
import 精子_side from './images/e3_shasei/s2_side-精子.svg'
import 精子_side_hv from './images/e3_shasei/s2_side-hv-精子.svg'
import 肛門_side from './images/e3_shasei/s2_side-肛門.svg'
import 肛門_side_hv from './images/e3_shasei/s2_side-hv-肛門.svg' 

export default function E3_shasei(props) {
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [word, setWord] = useState("");
    const [s2Page,setS2Page] = useState(1)

    const [imgFrontぼうこう,setImgFrontぼうこう] = useState(ぼうこう_front)
    const [imgFront尿道,setImgFront尿道] = useState(尿道_front)
    const [imgFront精巣,setImgFront精巣] = useState(精巣_front)
    const [imgFrontペニス,setImgFrontペニス] = useState(ペニス_front)
    const [imgFront精管,setImgFront精管] = useState(精管_front)
    const [imgFront精子,setImgFront精子] = useState(精子_front)

    const [imgSideぼうこう,setImgSideぼうこう] = useState(ぼうこう_side)
    const [imgSide尿道,setImgSide尿道] = useState(尿道_side)
    const [imgSide精巣,setImgSide精巣] = useState(精巣_side)
    const [imgSideペニス,setImgSideペニス] = useState(ペニス_side)
    const [imgSide精管,setImgSide精管] = useState(精管_side)
    const [imgSide精子,setImgSide精子] = useState(精子_side)
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
                            <section className='e3 s1'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_title.svg`}/>
                                    <img className='s1_shasei' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_shasei.png`}/>
                                    
                                    <div className='infi-slider'>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_infislide.png`}/>
                                        <img src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s1_infislide.png`}/>
                                    </div>
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
                                        精通は11歳ぐらいからありますが、<br/>人によって早いとか遅いとか<br/>心配はいらない。
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className='e3 s2'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/s2_title.svg`}/>

                                    <div className='diagram-wrapper'>
                                        {s2Page === 1 && 
                                            <div className='front'>
                                                <Stage width={960} height={480} options={{backgroundColor: "#fff", antialias: true }}>
                                                    <Sprite width={400} height={400} x={280} y={70} image={process.env.PUBLIC_URL + `/images/ehon/e3_shasei/s2_naiseiki-front.png`}/>
                                                    <Sprite width={90} height={231} x={444} image={imgFrontぼうこう} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFrontぼうこう(ぼうこう_front_hv)}}
                                                        pointerout={() => { setImgFrontぼうこう(ぼうこう_front)}}
                                                        pointerdown={() => { setWord("膀胱"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={405} height={48} x={83} y={350} image={imgFront尿道} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront尿道(尿道_front_hv)}}
                                                        pointerout={() => { setImgFront尿道(尿道_front)}}
                                                        pointerdown={() => { setWord("尿道"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={275} height={60} x={555} y={280} image={imgFront精巣} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront精巣(精巣_front_hv)}}
                                                        pointerout={() => { setImgFront精巣(精巣_front)}}
                                                        pointerdown={() => { setWord("精巣"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={380} height={48} x={83} y={280} image={imgFrontペニス} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFrontペニス(ペニス_front_hv)}}
                                                        pointerout={() => { setImgFrontペニス(ペニス_front)}}
                                                        pointerdown={() => { setWord("ペニス"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={307} height={48} x={83} y={190} image={imgFront精管} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront精管(精管_front_hv)}}
                                                        pointerout={() => { setImgFront精管(精管_front)}}
                                                        pointerdown={() => { setWord("精管"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={307} height={48} x={525} y={350} image={imgFront精子} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgFront精子(精子_front_hv)}}
                                                        pointerout={() => { setImgFront精子(精子_front)}}
                                                        pointerdown={() => { setWord("精子"); setShowModal(!showModal)}}
                                                    />
                                                </Stage>
                                            </div>
                                        }
                                        {s2Page === 2 && 
                                            <div className='side'>
                                                <Stage width={960} height={480} options={{backgroundColor: "#fff", antialias: true }}>
                                                    <Sprite width={400} height={400} x={280} y={70} image={process.env.PUBLIC_URL + `/images/ehon/e3_shasei/s2_naiseiki-side.png`}/>
                                                    <Sprite width={90} height={231} x={450} image={imgSideぼうこう} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSideぼうこう(ぼうこう_side_hv)}}
                                                        pointerout={() => { setImgSideぼうこう(ぼうこう_side)}}
                                                        pointerdown={() => { setWord("膀胱"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={266} height={48} x={96} y={350} image={imgSide尿道} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide尿道(尿道_side_hv)}}
                                                        pointerout={() => { setImgSide尿道(尿道_side)}}
                                                        pointerdown={() => { setWord("尿道"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={368} height={48} x={450} y={320} image={imgSide精巣} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide精巣(精巣_side_hv)}}
                                                        pointerout={() => { setImgSide精巣(精巣_side)}}
                                                        pointerdown={() => { setWord("精巣"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={252} height={48} x={96} y={270} image={imgSideペニス} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSideペニス(ペニス_side_hv)}}
                                                        pointerout={() => { setImgSideペニス(ペニス_side)}}
                                                        pointerdown={() => { setWord("ペニス"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={310} height={48} x={96} y={200} image={imgSide精管} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide精管(精管_side_hv)}}
                                                        pointerout={() => { setImgSide精管(精管_side)}}
                                                        pointerdown={() => { setWord("精管"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={404} height={58} x={418} y={380} image={imgSide精子} interactive={true} cursor={"pointer"}
                                                        pointerover={() => { setImgSide精子(精子_side_hv)}}
                                                        pointerout={() => { setImgSide精子(精子_side)}}
                                                        pointerdown={() => { setWord("精子"); setShowModal(!showModal)}}
                                                    />
                                                    <Sprite width={243.5} height={62.5} x={578} y={200} image={imgSide肛門} interactive={true} cursor={"pointer"}
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
                                        <div className='p-content'>
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

                                    <div className='p-content'>
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
                            <section className='e3 next-lesson'>
                                <h3>次の絵本を見ましょう</h3>
                                <div className='wrapper flex-row scr-center'>
                                    <LessonThumb lessonId="e2_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
                                    <LessonThumb lessonId="e4_suki" title="#4: 人を好きになるってこと？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
                                </div>
                                <div className='bubble-wrapper left'><span>女の子へ</span></div>
                                <div className='bubble-wrapper right'><span>二人へ</span></div>
                            </section>
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

