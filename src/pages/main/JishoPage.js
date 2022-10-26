import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import './LessonPage.css'

export default function JishoPage() {
  return (
    <div id='jisho-page'>
        <section className='header-section' style={{backgroundColor:"#DEEFFF"}}>
          <h2 style={{color:"#2B79CA"}}>性の辞書</h2>
          <div className='bold mt10'>ことばから性を学びましょう</div>
        </section>

        <section className='wordList-section'>
            
        </section>
    </div>
  )
}