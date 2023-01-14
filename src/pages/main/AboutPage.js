import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';

import './AboutPage.css'
import MethodSection from '../../components/MethodSection';

export default function AboutPage() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return(
        <div id='about'>
            <ReactPageScroller>
                <section className='gaiyou-section'>
                    <div className='header'>
                        <img className='title' src={process.env.PUBLIC_URL + `/images/main/about/about-arc.svg`}/>
                        
                    </div>
                    <div className='inner'>
                        <img className='ava' src={process.env.PUBLIC_URL + `/images/main/about/ava.png`}/>

                        <div className='header'>
                            <img className='title' src={process.env.PUBLIC_URL + `/images/main/about/TeenHood.svg`}/>
                            <div className='mid'>は 小・中学生向け</div>
                            <div className='bot'>思春期の性教育サイト</div>
                        </div>

                        <p className='content'>
                            Teenhoodは性別関わらず<span className='keyword'>７－１５才の小・中学生</span>は対象になります。<br/>
                            その上、「性教育をしたいけど、どこから始めたらいいかわからない」<br/>
                            <span className='keyword'>性教育を行う両親、教員、大人たち</span>もサポートしたいと思います。
                        </p>
                    </div>
                </section>
                <section className='character-section'>
                    <img className='title' src={process.env.PUBLIC_URL + `/images/main/about/character.svg`}/>
                    <img className='img' src={process.env.PUBLIC_URL + `/images/main/about/character.png`}/>
                </section>
                <section className='futari-section'>
                    <img className='title' src={process.env.PUBLIC_URL + `/images/main/about/futari.svg`}/>
                    <img className='img' src={process.env.PUBLIC_URL + `/images/main/about/futari.png`}/>
                    <div>
                        <svg className="waves about" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(76,160,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(76,160,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(76,160,255)" />
                        </g>
                        </svg>
                    </div>
                </section>
                <MethodSection/>
            </ReactPageScroller>
        </div>
    )
}