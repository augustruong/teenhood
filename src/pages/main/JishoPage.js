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
              <div onClick={() => {setShowModal(!showModal); setWord("陰のう")}}>陰のう</div>
              <div onClick={() => {setShowModal(!showModal); setWord("体毛")}}>陰毛</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>か</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("外性器")}}>外性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("亀頭")}}>亀頭</div>
              <div onClick={() => {setShowModal(!showModal); setWord("クリトリス")}}>クリトリス</div>
              <div onClick={() => {setShowModal(!showModal); setWord("経血")}}>経血</div>
              <div onClick={() => {setShowModal(!showModal); setWord("月経")}}>月経</div>
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
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>は</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("内性器")}}>内性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ニキビ")}}>ニキビ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ナプキン")}}>ナプキン</div>
              <div onClick={() => {setShowModal(!showModal); setWord("尿道")}}>尿道</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>ま</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("内性器")}}>内性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ニキビ")}}>ニキビ</div>
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
              <div onClick={() => {setShowModal(!showModal); setWord("内性器")}}>内性器</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ニキビ")}}>ニキビ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("ナプキン")}}>ナプキン</div>
              <div onClick={() => {setShowModal(!showModal); setWord("尿道")}}>尿道</div>
            </div>
          </div>
          <div className='wordList-wrapper'>
            <div className='letter'>AZ</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("HIV感染症・エイズ")}}>HIV感染症・エイズ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("PMS")}}>PMS</div>
              <div onClick={() => {setShowModal(!showModal); setWord("STD/STI")}}>STD/STI</div>
            </div>
          </div>
        </section>
    </div>
  )
}