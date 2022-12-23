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
          <section className='main-header-section' style={{backgroundColor:"#E1FCDA"}}>
            <img className='title' src={process.env.PUBLIC_URL + `/images/main/title_nayami.png`}/>
            <h3 className='bold mt20'>気になることを解けましょう</h3>
          </section>

          <section className='nayamiList-section'>
            <MContext.Consumer>
              {(context) => (
                <ReactPageScroller
                customPageNumber={context.state.currentPage}
                renderAllPagesOnFirstRender={true}
                containerHeight="72vh"
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