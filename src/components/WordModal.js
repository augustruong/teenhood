import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import JishoData from '../data/JishoData.json'


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalWrapper = styled.div`
  width: 940px;
  height: 540px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
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
img {
    width: 440px;
    height: 440px;
    border-radius: 15px;
}
.pager {
    margin-top: 10px;
}
`;

const ModalContent = styled.div`
    margin-left: 30px;
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
      

    .scroll-wrapper > .word-defi {
        margin-bottom: 15px;
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


const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -40px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
  color: #ffffff;
`;

export const WordModal = ({ word, showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {setShowModal(false);}
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalInner>
                <ModalImage>
                    <img src={process.env.PUBLIC_URL + `/images/jisho/nyuubou.png`}/>
                    <div className='pager'>1/2</div>
                    <div className='img-detail bold'>乳房</div>
                </ModalImage>
                <ModalContent>
                    <div className='header'>
                        <h2 className='word-title'>{word}</h2>
                        <div>
                            <div className='word-yomi'>にゅうぼう</div>
                            <div className='word-eigo'>Breast</div>
                        </div>
                    </div>
                    <div className='scroll-wrapper'>
                        <div className='word-defi'><span className='bold'>定義</span>：（かんたんに説明）</div>
                        <p className='word-detail'><span className='bold'>詳細</span>：
                        女性は大人になると、だいたい毎月1回、約3〜7日間、自分の意思とは関係なく、性器から血液等が外に出される月経を迎える。初めて起こる月経のことを「初経（初潮）」といい、50歳くらいまで、この現象と付き合うことになる。はじめの2年間くらいは規則的に来ないことも多く、避妊をしない性行為のあとに月経が来なくてもいつものことと思い込んで妊娠に気づかないことも。月経の周期の変化で、腟分泌物（おりもの）も増えてくる。

ちなみに、思春期の発育の順番は「乳房」→「陰毛」→「初経」。女性は大人になると、だいたい毎月1回、約3〜7日間、自分の意思とは関係なく、性器から血液等が外に出される月経を迎える。初めて起こる月経のことを「初経（初潮）」といい、50歳くらいまで、この現象と付き合うことになる。はじめの2年間くらいは規則的に来ないことも多く、避妊をしない性行為のあとに月経が来なくてもいつものことと思い込んで妊娠に気づかないことも。月経の周期の変化で、腟分泌物（おりもの）も増えてくる。

ちなみに、思春期の発育の順番は「乳房」→「陰毛」→「初経」。
                        </p>
                    </div>
                    <div className='word-more flex-row'>
                        <div>もっと知りたい</div>
                        <div className='list flex-row'>
                            <div>性器</div>
                            <div>性器</div>
                            <div>性器</div>
                        </div>
                    </div>
                </ModalContent>
              </ModalInner>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};