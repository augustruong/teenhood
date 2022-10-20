import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LessonList from '../components/LessonList'

import './HomePage.css'

export default function HomePage() {
  return (
    <div id='home'>
        <section className='hero-section'>
          <h2 className='altertext'>KEY VISUAL</h2>
        </section>

        <section className='lesson-section'>
          <div className='section-header'>
            <h2 className='section-title'>性を学ぶ</h2>
            <div className='section-subtitle'>思春期のジャーニーを始めましょう</div>
          </div>
          <LessonList />
        </section>
    </div>
  )
}