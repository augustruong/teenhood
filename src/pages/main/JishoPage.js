import React, { useState, useEffect } from 'react'
import { PopUpModal } from '../../components/modals/PopUpModal'
import './AllPage.css'

export default function JishoPage() {
  const [showModal, setShowModal] = useState(false);
  const [word, setWord] = useState("");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div id='jisho-page'>
        <PopUpModal word={word} showModal={showModal} setShowModal={setShowModal} />

        <section className='header-section' style={{backgroundColor:"#DEEFFF"}}>
          <h2 style={{color:"#2B79CA"}}>性の辞書</h2>
          <div className='bold mt10'>ことばから性を学びましょう</div>
        </section>

        <section className='wordList-section'>
          <div className='wordList-wrapper'>
            <div className='letter'>あ</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("汗")}}>あせ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰核")}}>陰核</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰茎")}}>陰茎</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰のう")}}>陰のう</div>
              <div onClick={() => {setShowModal(!showModal); setWord("体毛")}}>陰毛</div>
              <div onClick={() => {setShowModal(!showModal); setWord("受精卵")}}>受精卵</div>
            
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>か</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("外性器")}}>外性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("亀頭")}}>亀頭</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰核")}}>クリトリス</div>
              <div onClick={() => {setShowModal(!showModal); setWord("経血")}}>経血</div>
              <div onClick={() => {setShowModal(!showModal); setWord("月経")}}>月経</div>
              <div onClick={() => {setShowModal(!showModal); setWord("コンドーム")}}>コンドーム</div>

            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>さ</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("子宮")}}>子宮</div>
              <div onClick={() => {setShowModal(!showModal); setWord("射精")}}>射精</div>
              <div onClick={() => {setShowModal(!showModal); setWord("出産")}}>出産</div>
              <div onClick={() => {setShowModal(!showModal); setWord("初経")}}>初経</div>
              <div onClick={() => {setShowModal(!showModal); setWord("自慰")}}>自慰</div>
              <div onClick={() => {setShowModal(!showModal); setWord("性交")}}>性交</div>
              <div onClick={() => {setShowModal(!showModal); setWord("精液")}}>精液</div>
              <div onClick={() => {setShowModal(!showModal); setWord("精巣")}}>精巣</div>
              <div onClick={() => {setShowModal(!showModal); setWord("精子")}}>精子</div>
              <div onClick={() => {setShowModal(!showModal); setWord("精管")}}>精管</div>
              <div onClick={() => {setShowModal(!showModal); setWord("前立腺")}}>前立腺</div>
              <div onClick={() => {setShowModal(!showModal); setWord("性感染症")}}>性感染症</div>

            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>た</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("膣")}}>膣</div>
              <div onClick={() => {setShowModal(!showModal); setWord("中絶")}}>中絶</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>な</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("内性器")}}>内性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ニキビ")}}>ニキビ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ナプキン")}}>ナプキン</div>
              <div onClick={() => {setShowModal(!showModal); setWord("尿道")}}>尿道</div>
              <div onClick={() => {setShowModal(!showModal); setWord("乳房")}}>乳房</div> 
              <div onClick={() => {setShowModal(!showModal); setWord("乳房")}}>妊娠</div>  

            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>は</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("包茎")}}>包茎</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰茎")}}>ペニス</div>
              <div onClick={() => {setShowModal(!showModal); setWord("梅毒")}}>梅毒</div>
              <div onClick={() => {setShowModal(!showModal); setWord("排卵")}}>排卵</div>
              <div onClick={() => {setShowModal(!showModal); setWord("避妊")}}>避妊</div>

            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>ま</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("夢精")}}>夢精</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>や</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("内性器")}}>内性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ニキビ")}}>ニキビ</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>ら</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("卵管")}}>卵管</div>
              <div onClick={() => {setShowModal(!showModal); setWord("卵巣")}}>卵巣</div>
              <div onClick={() => {setShowModal(!showModal); setWord("卵子")}}>卵子</div>
              <div onClick={() => {setShowModal(!showModal); setWord("恋愛")}}>恋愛</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>AZ</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("HIV感染症・エイズ")}}>HIV感染症・エイズ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("PMS")}}>PMS</div>
              <div onClick={() => {setShowModal(!showModal); setWord("性感染症")}}>STD/STI</div>
            </div>
          </div>
        </section>
    </div>
  )
}