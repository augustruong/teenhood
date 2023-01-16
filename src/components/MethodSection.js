import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';

import './MethodSection.css'

export default function MethodSection() {
    return(
      
        <section className='method-section'>
          <div className='header'>
            <img className='title' src={process.env.PUBLIC_URL + `/images/key-visual/方式.svg`}/>
            {/* <div className='bg'></div> */}
          </div>
          <div className='main'>
            <div className='subheader'>好きな形式をえらびましょう</div>
            <ReactPageScroller containerWidth={"100%"}>
              <section>
                <section className='method-card-wrapper flex-row'>
                  <div className='method-card ehon flex-column'>
                    <Link to={`/ehon`} className='method-thumb'>
                      <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/ehon-thumb.png`}/>
                      <h4 className='title'>性の絵本</h4>
                      <div className='subtitle'>絵から性を学びましょう</div>
                    </Link>
                    <NavLink to={`/ehon`} ><button className='method-icon ehon'>絵</button></NavLink>
                  </div>
                  <div className='method-card jisho flex-column'>
                    <Link to={`/jisho`} className='method-thumb'>
                      <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/jisho-thumb.png`}/>
                      <h4 className='title'>性の辞書</h4>
                      <div className='subtitle'>ことばから性を学びましょう</div>
                    </Link>
                    <NavLink to={`/jisho`} ><button className='method-icon jisho'>辞</button></NavLink>
                  </div>
                  <div className='method-card nayami flex-column'>
                    <Link to={`/nayami`} className='method-thumb'>
                      <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/nayami-thumb.png`}/>
                      <h4 className='title'>性の悩み</h4>
                      <div className='subtitle'>気になることを解けましょう</div>
                    </Link>
                    <NavLink to={`/nayami`} ><button className='method-icon nayami'>悩</button></NavLink>
                  </div>
                </section>

                  <div class="scroll-downs">
                    <div class="mousey">
                      <div class="scroller"></div>
                    </div>
                  </div>
              </section>
              <section className='method-card-wrapper flex-row'>
                <div className='method-card quiz flex-column'>
                  <Link to={`/quiz`} className='method-thumb'>
                    <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/quiz-thumb.png`}/>
                    <h4 className='title'>性のクイズ</h4>
                    <div className='subtitle'>性の知識をテストしましょう</div>
                  </Link>
                  
                </div>
                <div className='method-card sos flex-column'>
                  <Link to={`/sos`} className='method-thumb'>
                    <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/methods/sos-thumb.png`}/>
                    <h4 className='title'>性のSOS</h4>
                    <div className='subtitle'>「困った！」があったときに</div>
                  </Link>
                  
                </div>
              </section>
            </ReactPageScroller>
          </div>
        </section>
    )
}
