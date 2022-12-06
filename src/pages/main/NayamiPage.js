import React, { useState, useEffect } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { MContext } from '../../module/MyProvider';
import MyProvider from '../../module/MyProvider'

import NayamiModal from '../../components/modals/NayamiModal'
import NayamiNav from '../../components/NayamiNav';

import './AllPage.css'

export default function NayamiPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <MyProvider>
      <div id='nayami-page'>
          <section className='header-section' style={{backgroundColor:"#E1FCDA"}}>
            <h2 style={{color:"#75BE5B"}}>性の悩み</h2>
            <div className='bold mt10'>気になることを解けましょう</div>
          </section>

          <section className='nayamiList-section'>
            <MContext.Consumer>
              {(context) => (
                <ReactPageScroller
                customPageNumber={context.state.currentPage}
                renderAllPagesOnFirstRender={true}
                containerHeight="70vh"
                onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                >
                  <NayamiModal index={0}/>
                  <NayamiModal index={1}/>
                  <NayamiModal index={2}/>
                  <NayamiModal index={3}/>
                  <NayamiModal index={4}/>
                  <NayamiModal index={5}/>
                  <NayamiModal index={6}/>
                </ReactPageScroller>
              )}
            </MContext.Consumer>
          </section>

          <NayamiNav/>
      </div>
    </MyProvider>
  )
}