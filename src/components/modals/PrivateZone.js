import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 800px;
  height: 560px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  background: #F9F9F9;
  position: relative;
  z-index: 100;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;

  .visual-wrapper {
    bottom: 0;
  }
  .visual-wrapper > img {
    position: absolute;
  }
  .visual-wrapper > .futari {
    width: 33%;
    left: 275px;
    bottom: 0;
    z-index: 106;
    animation: jitter-1 1s infinite ease-out;
  }
  .visual-wrapper > .wave1 {
    width: 90%;
    left: 0;
    bottom: 60px;
    z-index: 101;
    animation: waving-right 1s infinite ease-in-out;

  } 
  .visual-wrapper > .wave2 {
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 103;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    animation: waving-left 2s infinite ease-in-out;

  } 
  .visual-wrapper > .wave3 {
    width: 100%;
    left: 0;
    bottom: 0px;
    z-index: 105;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    animation: waving-right 1.5s infinite ease-in-out;

  } 
  .visual-wrapper > .wave4 {
    width: 100%;
    left: 0;
    bottom: 0px;
    z-index: 107;
    border-bottom-left-radius: 20px;
    animation: waving-left 2s infinite ease-in-out;

  } 
  .visual-wrapper > .alert1 {
    left: 80px;
    bottom: 120px;
    z-index: 102;
    animation: kata1 5s 2s infinite ease-in-out;
  }
  .visual-wrapper > .alert2 {
    right: 50px;
    bottom: 120px;
    z-index: 102;
    animation: kata1 4s 2s infinite ease-in-out;
  }
  .visual-wrapper > .alert3 {
    right: 110px;
    bottom: 30px;
    z-index: 104;
    animation: kata1 3s 2s infinite ease-in-out;
  }
  .visual-wrapper > .alert4 {
    left: 110px;
    bottom: 0;
    z-index: 106;
    animation: kata1 2s 2s infinite ease-in-out;
  }
  .title {
    display: block;
    margin: 0 auto;
    width: 56%;
  }
  .p-content > p {font-size: 13px;}
`;

export default function PrivateZone() {
    return(
        <ModalWrapper>
            <img className='title' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/title.svg`}/>
            <div className='p-content'>
                <p>
                外見をわるく言ったり、<span className='keyword'>口と水着ゾーン</span><br/>
                （胸、お尻、性器）を見ようとしたり、<br/>
                さわろうとしたりするのも、ぜったいだめだよ。
                </p>
            </div>
            <div className='visual-wrapper'>
                <img className='futari' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/futari.png`}/>
                <img className='wave1' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/wave-1.svg`}/>
                <img className='wave2' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/wave-2.svg`}/>
                <img className='wave3' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/wave-3.svg`}/>
                <img className='wave4' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/wave-4.svg`}/>
                <img className='alert1' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/alert-1.svg`}/>
                <img className='alert2' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/alert-2.svg`}/>
                <img className='alert3' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/alert-3.svg`}/>
                <img className='alert4' src={process.env.PUBLIC_URL + `/images/ehon/e1_shishunki/privateZone/alert-4.svg`}/>
            
            </div>
        </ModalWrapper>
    )
}