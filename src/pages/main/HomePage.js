import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './HomePage.css'

export default function HomePage() {
  return (
    <div id='home'>
        <section className='hero-section'>
          <h2 className='altertext'>KEY VISUAL</h2>
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
    </div>
  )
}