import React, { useEffect } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { MContext } from '../../module/MyProvider';
import MyProvider from '../../module/MyProvider'

import './AllPage.css'
import SOSTemplate from '../../components/SOSTemplate';

export default function SOSPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <MyProvider>
    <div id='sos-page'>
        <MContext.Consumer>
            {(context) => (
                <ReactPageScroller
                    customPageNumber={context.state.currentPage}
                    renderAllPagesOnFirstRender={true}
                    containerHeight="100vh"
                    onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                >
                <section>
                    <section className='sos-header-section' style={{backgroundColor:"#DBD1FF"}}>
                        <img className='title' src={process.env.PUBLIC_URL + `/images/main/title_sos.png`}/>
                        <h3 className='bold mt20'>「困った！」があったときに</h3>
                    </section>
                    <section className='sos-list-wrapper flex-row'>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/pill.png`} onClick={() => {context.setCurrentPage(1)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/pregnant.png`} onClick={() => {context.setCurrentPage(2)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/violence.png`} onClick={() => {context.setCurrentPage(3)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/sns.png`} onClick={() => {context.setCurrentPage(4)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/illness.png`} onClick={() => {context.setCurrentPage(5)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/lgbt.png`} onClick={() => {context.setCurrentPage(6)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/adolescent.png`} onClick={() => {context.setCurrentPage(7)}}/>
                        <img className='sos-topic' src={process.env.PUBLIC_URL + `/images/sos/kodomo.png`} onClick={() => {context.setCurrentPage(8)}}/>
                    </section>
                </section>
                
                    <SOSTemplate topic={'pill'} bgColor='#CCD4FF'/>
                    <SOSTemplate topic={'pregnant'} bgColor='#C2B1E5'/>
                    <SOSTemplate topic={'violence'} bgColor='#C0F1E1'/>
                    <SOSTemplate topic={'sns'} bgColor='#C3E8FF'/>
                    <SOSTemplate topic={'illness'} bgColor='#F3BAB4'/>
                    <SOSTemplate topic={'lgbt'} bgColor='#FFE2E4'/>
                    <SOSTemplate topic={'adolescent'} bgColor='#D4EBBA'/>
                    <SOSTemplate topic={'kodomo'} bgColor='#FFF3A6'/>
                </ReactPageScroller>
            )}
        </MContext.Consumer>
    </div>
    </MyProvider>
  )
}