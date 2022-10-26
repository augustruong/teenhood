import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import LessonList from '../../components/LessonList'

import './LessonPage.css'

export default function EhonPage() {
  return (
    <div id='ehon-page'>
        <section className='header-section' style={{backgroundColor:"#FFECEC"}}>
          <h2 style={{color:"#E06363"}}>性の絵本</h2>
          <div className='bold mt10'>絵から性を学びましょう</div>
        </section>

        <section className='lessonList-section'>
          <LessonList />
        </section>
    </div>
  )
}