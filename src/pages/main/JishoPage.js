import React, { useState, useEffect } from 'react'
import { PopUpModal } from '../../components/modals/PopUpModal'
import LessonThumb from '../../components/LessonThumb'
import EhonData from '../../data/EhonData.json'

import './AllPage.css'

export default function JishoPage() {
  const [showModal, setShowModal] = useState(false);
  const [word, setWord] = useState("");
  const [virus, setVirus] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1)

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div id='jisho-page'>
        {type === "word" && <PopUpModal type={"word"} word={word} showModal={showModal} setShowModal={setShowModal} />}
        {type === "virus" && <PopUpModal type={"virus"} word={virus} showModal={showModal} setShowModal={setShowModal} />}

        <section className='header-section' style={{backgroundColor:"#DEEFFF"}}>
          <img className='title' src={process.env.PUBLIC_URL + `/images/main/title_jisho.png`}/>
          <h3 className='bold mt20'>ことばから性を学びましょう</h3>
        </section>

        <nav>
          <ul>
              <li className={page===1 ? 'active' : ''} onClick={() => setPage(1)}>あAZ</li>
              <li className={page===2 ? 'active' : ''} onClick={() => setPage(2)}>テーマ</li>
          </ul>
        </nav>

        {page===1 &&
          <section className='az-section'>
            <div className='wordList-wrapper'>
              <div className='letter'>あ</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("汗")}}>あせ</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰核")}}>陰核</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰茎")}}>陰茎</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰のう")}}>陰のう</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰毛")}}>陰毛</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("受精卵")}}>受精卵</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰唇")}}>陰唇</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>か</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("性器カンジダ感染症")}}>カンジダ症</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("外性器")}}>外性器</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("亀頭")}}>亀頭</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰核")}}>クリトリス</div>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("性器クラミジア")}}>クラミジア</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("経血")}}>経血</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("月経")}}>月経</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("コンドーム")}}>コンドーム</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("肛門")}}>肛門</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>さ</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("月経")}}>生理</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("子宮")}}>子宮</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("射精")}}>射精</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("出産")}}>出産</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("初経")}}>初経</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("自慰")}}>自慰</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("性交")}}>性交</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("精巣")}}>精巣</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("精子")}}>精子</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("精液")}}>精液</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("精管")}}>精管</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("性感染症")}}>性感染症</div>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("尖圭コンジローマ")}}>尖圭コンジローマ</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>た</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("膣")}}>膣</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("体毛")}}>体毛</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("着床")}}>着床</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("中絶")}}>中絶</div>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("トリコモナス症")}}>トリコモナス症</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>な</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("内性器")}}>内性器</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("ニキビ")}}>ニキビ</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("ナプキン")}}>ナプキン</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("尿道")}}>尿道</div>
                <div onClick={() => {setShowModal(!showModal); setType("word");setWord("乳房")}}>乳房</div> 
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("妊娠")}}>妊娠</div>  
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>は</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("梅毒")}}>梅毒</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("ぼっき")}}>ぼっき</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("膀胱")}}>膀胱</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("包皮")}}>包皮</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("陰茎")}}>ペニス</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("排卵")}}>排卵</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("避妊")}}>避妊</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>ま</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("夢精")}}>夢精</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>ら</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("卵管")}}>卵管</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("卵巣")}}>卵巣</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("卵子")}}>卵子</div>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("淋菌感染症")}}>淋菌感染症</div>
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='letter'>AZ</div>
              <div className='wordList'>
                <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus("HIV・エイズ感染症")}}>HIV・エイズ</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("PMS")}}>PMS</div>
                <div onClick={() => {setShowModal(!showModal); setType("word"); setWord("性感染症")}}>STD/STI</div>
              </div>
            </div>
          </section>
        }
        {page===2 &&
          <section className='tema-section'>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e1_shishunki" title="#1: 私のからだが変化している" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[0].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("word"); setWord(word)}}>{word}</div>
                ))}
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e2_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[1].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("word"); setWord(word)}}>{word}</div>
                ))}
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e3_shasei" title="#3: 射精って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[2].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("word"); setWord(word)}}>{word}</div>
                ))}
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e4_suki" title="#4: 人を好きになるってこと？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[3].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("word"); setWord(word)}}>{word}</div>
                ))}
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e5_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[4].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("word"); setWord(word)}}>{word}</div>
                ))}
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e6_hinin" title="#6: 基本的な避妊方法" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[5].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("word"); setWord(word)}}>{word}</div>
                ))}
              </div>
            </div>
            <div className='wordList-wrapper'>
              <div className='thumb-wrapper'>
                <LessonThumb lessonId="e7_std" title="#7: 性感染症を知ろう" subtitle="思春期のしるし、男女のからだのちがい" bgColor="white"/>
              </div>
              <div className='wordList'>
                {EhonData[6].wordList.map((word) => (
                  <div onClick={() => {setShowModal(!showModal); setType("virus"); setVirus(word)}}>{word}</div>
                ))}
              </div>
            </div>
          </section>
            
        }
    </div>
  )
}