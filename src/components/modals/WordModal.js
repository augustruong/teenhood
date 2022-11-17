import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Carousel from 'react-elastic-carousel'
import '../Carousel.css'

import JishoData from '../../data/JishoData.json'

const ModalWrapper = styled.div`
  width: 880px;
  height: 540px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  background: #FFFFFF;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 20px;
  text-align: center;
  padding: 30px 30px;
  margin: 0 auto;
  @media screen and (max-width: 824px) {
    width: 90vw;
  }
`;

const ModalInner = styled.div`
  color: var(--brown-color);
  display: flex;
  flex-direction: row;
`;

const ModalImage = styled.div`
.modal-img {
    width: 440px;
    height: 440px;
    border-radius: 15px;
}
.img-detail {
    text-align: center;
}
`;

const ModalContent = styled.div`
    margin-left: 35px;
    text-align: left;
    width: 100%;

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }

    .header > .word-title {
        color: var(--red-color);
        font-size: 40px;
    }

    .scroll-wrapper {
        margin-top: 30px;
        height: 320px;
        overflow-y: scroll;
        padding-right: 15px;
    }

    .scroll-wrapper::-webkit-scrollbar {
        width: 7px;
      }
      
    .scroll-wrapper::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
      }
      
    .scroll-wrapper::-webkit-scrollbar-thumb {
        background-color: #B4B4B4;
        border-radius: 100px;
      }
    .scroll-wrapper > .word-defi,.word-detail {
      margin-bottom: 15px;
    }
    .scroll-wrapper > .word-defi,.word-detail {
      display: inline-block;
    }
    
    
    .word-more {
        border-top: var(--grey-color) 1px solid;
        padding-top: 15px;
        margin-top: 20px;
    }
    .word-more > .list {
        gap: 30px;
        margin-left: 50px;
    }

    .word-more > .list > div {
        color: #6D96FF;
    }
`;


export default function WordModal(props) {
  let resetTimeout;
  const carouselRef = useRef(null);
  const modalRef = useRef();
  var getWord = JishoData.filter(function (el)
  {
    return el.word === props.word;
  });
  var [thisWord,setThisWord] = useState(getWord[0]);
  
  if (thisWord) {var thisImgArray = thisWord.img}


  return (
    <>
    <ModalWrapper>
      <ModalInner>
        <Carousel
            ref={carouselRef}
            enableAutoPlay
            autoPlaySpeed={2000} 
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (index + 1 === thisImgArray.length) {
                    resetTimeout = setTimeout(() => {
                      carouselRef.current.goTo(0)
                  }, 2000) 
                }
            }}
            itemsToShow={1}
        >
            {thisImgArray.map((img) => (
              <ModalImage>
                <img className='modal-img' src={process.env.PUBLIC_URL + `/images/jisho/${img}.png`}/>
                <p className='img-detail'>{`[ ${img} ]`}</p>
              </ModalImage>
            ))}
        </Carousel>
        <ModalContent>
          <div className='header'>
            <h2 className='word-title'>{props.word}</h2>
            <div>
              <div className='word-yomi'>{thisWord.yomi}</div>
              <div className='word-eigo'>英: {thisWord.eigo}</div>
            </div>
          </div>
          <div className='scroll-wrapper'>
            <div className='word-defi'>
              <span className='bold'>定義</span>：
              <p style={{display:"inline"}} dangerouslySetInnerHTML={{__html: `${thisWord.defi}`}}></p>
            </div>
            <div className='word-detail' >
              <span className='bold'>詳細</span>：
              <p style={{display:"inline"}} dangerouslySetInnerHTML={{__html: `${thisWord.detail}`}}></p>
            </div>
            <div className='word-source' >
              <span className='bold'>参考</span>：<br/>
              <a href={thisWord.source} target='__blank' style={{display:"inline",textDecoration: "underline"}}>{thisWord.source}</a>
            </div>
          </div>
          <div className='word-more flex-row'>
            <div>もっと知りたい</div>
            <div className='list flex-row'>
              <div>ニキビ</div>
              <div>ニキビ</div>
              <div>ニキビ</div>
            </div>
          </div>
        </ModalContent>
      </ModalInner>
    </ModalWrapper>
    </>
  );
};