import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import LessonList from '../../components/LessonList'

import './AllPage.css'

export default function EhonPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div id='ehon-page'>
        <section className='main-header-section' style={{backgroundColor:"#FFECEC"}}>
        <img className='title' src={process.env.PUBLIC_URL + `/images/main/title_ehon.png`}/>

          <h3 className='bold mt20'>絵から性を学びましょう</h3>
        </section>

        <section className='lessonList-section'>
          <LessonList />
        </section>
    </div>
  )
}