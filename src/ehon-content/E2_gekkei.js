import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E2_gekkei.css'

export default function E2_gekkei(props) {
    const thisLesson = EhonData[props.index];
    const [showModal, setShowModal] = useState(false);
    const [word, setWord] = useState("");

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
                        </ReactPageScroller>
                    )}
                </MContext.Consumer>
            </div>
        </div>
    )
}

