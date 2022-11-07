import React, { useRef, useState,useEffect, useCallback } from 'react';
import styled from 'styled-components';
import EhonData from '../../data/EhonData.json'
import QuestionSet from './QuestionSet';

const ModalWrapper = styled.div`
  width: 640px;
  height: 540px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  background: #FFFFFF;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 824px) {
    width: 90vw;
  }
  .nayami-title {
    font-weight: 700;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 20px 20px 0px 0px;
  }
`;

const ModalInner = styled.div`
  color: var(--brown-color);
  padding: 20px 10px 30px 30px;
  
`;

const ModalContent = styled.div`
    text-align: left;
    width: 100%;

    .scroll-wrapper {
      overflow-y: scroll;
      height: 430px;
      padding-right: 20px;
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

  .nayami-set {
    border-bottom: 2px dotted var(--grey-color);
    padding-top: 5px;
    padding-bottom: 9px;
    margin-bottom: 10px;
  }
  .nayami-question-wrapper {
    margin-bottom: 5px;
  }
  .nayami-question::before, .nayami-answer::before{
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
  .nayami-question::before {
    content: url("/icons/q-icon.svg");
  }
  .nayami-answer::before {
    content: url("/icons/a-icon.svg");
  }
  .toggle-icon {
    display: inline;
    border-radius: 50px;
  }
  .nayami-question {
    display: inline;
    margin-right: 10px;
  }
  .nayami-question-wrapper:hover {
    cursor: pointer;
  }
  .nayami-question-wrapper:hover .toggle-icon{
    font-weight: 900;
    color:#75BE5B;
  }
  .nayami-question-wrapper:hover  .nayami-question {
    font-weight: 700;
    color:#75BE5B;
  }
  .nayami-answer {
    line-height: 200%;
  }
`;


export default function NayamiModal(props) {
  let resetTimeout;
  const modalRef = useRef();
  const thisLesson = EhonData[props.index];
  const nayamiArray = thisLesson.nayami;

  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
    <ModalWrapper>
      <div className='nayami-title' style={{backgroundColor: "#D3F1FF"}}>{thisLesson.title}</div>
      <ModalInner>
        <ModalContent>
          <div className='scroll-wrapper'>
            {nayamiArray.map((nayami) => (
              <QuestionSet question={nayami.question} answer={nayami.answer}/>
            ))}
          </div>
        </ModalContent>
      </ModalInner>
    </ModalWrapper>
    </>
  );
};