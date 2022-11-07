import React, {useState} from 'react'

import './LessonPage.css'

export default function JishoPage() {
  const [showModal, setShowModal] = useState(false);
  const [word, setWord] = useState("");

  return (
    <div id='jisho-page'>
        {/* <PopUpModal word={word} showModal={showModal} setShowModal={setShowModal} /> */}

        <section className='header-section' style={{backgroundColor:"#DEEFFF"}}>
          <h2 style={{color:"#2B79CA"}}>性の辞書</h2>
          <div className='bold mt10'>ことばから性を学びましょう</div>
        </section>

        <section className='wordList-section'>
          
          <div className='wordList-wrapper'>
            <div className='letter'>あ</div>
            <div className='wordList'>
              <div onClick={() => {setShowModal(!showModal); setWord("あせ")}}>あせ</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰のう")}}>陰のう</div>
              <div onClick={() => {setShowModal(!showModal); setWord("陰毛")}}>陰毛</div>
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
        </section>
    </div>
  )
}