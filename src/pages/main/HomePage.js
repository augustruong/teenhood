import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';
import { PopUpModal } from '../../components/modals/PopUpModal'

import './HomePage.css'
import MethodSection from '../../components/MethodSection';

export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [showModal, setShowModal] = useState(true);

  return (
    <div id='home'>
      {/* <PopUpModal type={"welcome"} showModal={showModal} setShowModal={setShowModal} /> */}

      <ReactPageScroller>
        <section className='hero-section'>
          <img className='title' src={process.env.PUBLIC_URL + `/images/key-visual/TEENHOOD.svg`}/>
          <h3 className='subtitle'>思春期の性をまなぼう！</h3>
          <div className='chara-wrapper'>
            <img className='chinchan' src={process.env.PUBLIC_URL + `/images/key-visual/chinchan.png`}/>
            <img className='futari' src={process.env.PUBLIC_URL + `/images/key-visual/futari.png`}/>
            <img className='shirichan' src={process.env.PUBLIC_URL + `/images/key-visual/shirichan.png`}/>
            <img className='bg' src={process.env.PUBLIC_URL + `/images/key-visual/header_bg.png`}/>
            
            <Link to="/about">
              <div className='bubble-wrapper home'><span className='teenhood'>TeenHood</span><br/>ってなに？</div>
            </Link>
            <div class="mouse_scroll">
              <div class="mouse">
                <div class="wheel"></div>
              </div>
              <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
              </div>
          </div>
            <div>
            <svg className="waves home" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
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
          </div>
          
        </section>
        <MethodSection />
      </ReactPageScroller> 
    </div>
  )
}