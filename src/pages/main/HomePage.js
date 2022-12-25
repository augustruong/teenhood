import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';
import { PopUpModal } from '../../components/modals/PopUpModal'

import './HomePage.css'

export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [showModal, setShowModal] = useState(true);

  return (
    <div id='home'>
      <PopUpModal type={"welcome"} showModal={showModal} setShowModal={setShowModal} />

      <ReactPageScroller>
        <section className='hero-section'>
          <img className='title' src={process.env.PUBLIC_URL + `/images/key-visual/TEENHOOD.svg`}/>
          <h3 className='subtitle'>思春期の性をまなぼう！</h3>
          <div className='chara-wrapper'>
            <img className='chinchan' src={process.env.PUBLIC_URL + `/images/key-visual/chinchan.png`}/>
            <img className='futari' src={process.env.PUBLIC_URL + `/images/key-visual/futari.png`}/>
            <img className='shirichan' src={process.env.PUBLIC_URL + `/images/key-visual/shirichan.png`}/>
            <div className='bubble-wrapper'><span className='teenhood'>TeenHood</span><br/>ってなに？</div>
          </div>
        </section>

        <section className='method-section'>
          <div className='section-header'>好きな形式をえらびましょう</div>
          <div className='wrapper flex-row'>
            <div className='method-card ehon flex-column ct'>
              <Link to={`/ehon`} className='method-thumb'>
                <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/ehon-thumb.png`}/>
                <h4 className='title'>性の絵本</h4>
                <div className='subtitle'>絵から性を学びましょう</div>
              </Link>

              <NavLink to={`/ehon`} ><button className='method-icon ehon'>絵</button></NavLink>
              
            </div>
            
            <div className='method-card jisho flex-column ct'>
              <Link to={`/jisho`} className='method-thumb'>
                <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/jisho-thumb.png`}/>
                <h4 className='title'>性の辞書</h4>
                <div className='subtitle'>ことばから性を学びましょう</div>
              </Link>
              
              <NavLink to={`/jisho`} ><button className='method-icon jisho'>辞</button></NavLink>

            </div>

            <div className='method-card nayami flex-column ct'>
              <Link to={`/nayami`} className='method-thumb'>
                <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/nayami-thumb.png`}/>
                <h4 className='title'>性の悩み</h4>
                <div className='subtitle'>気になることを解けましょう</div>
              </Link>
              
              <NavLink to={`/nayami`} ><button className='method-icon nayami'>悩</button></NavLink>

            </div>

          </div>
        </section>
      </ReactPageScroller> 
    </div>
  )
}