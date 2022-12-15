import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import WordModal from './WordModal';
import VirusModal from './VirusModal';
import { WelcomeForm } from './WelcomeForm';

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

export const PopUpModal = ({ type, word, virusIndex, showModal, setShowModal }) => {
  const modalRef = useRef()
  
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
              {type === "word" && <WordModal word={word}/>}
              {type === "virus" && <VirusModal word={word}/>}
              {type === "welcome" && <WelcomeForm />}
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};