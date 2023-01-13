import React from 'react'
import ReactPageScroller from 'react-page-scroller';
import { MContext } from '../module/MyProvider';

import WordModal from '../components/modals/WordModal';
import VirusModal from '../components/modals/VirusModal';

import EhonData from '../data/EhonData.json'
import './Ehon.css'

export default function EhonJisho(props) {
    const thisLesson = EhonData[props.index];
    const wordListArray = thisLesson.wordList;

  return (
    <div className='ehon-jisho'>
        <MContext.Consumer>
        {(context) => (
            <ReactPageScroller
                customPageNumber={context.state.currentPage}
                renderAllPagesOnFirstRender={true}
                onBeforePageScroll={(number) => {context.setCurrentPage(number)}}>
                {wordListArray.map((word) => (
                    <div>
                        {props.index === 6 ? (
                            <div className='wordModal-wrapper'>
                                {word === "性感染症" ? 
                                (
                                    <WordModal word={word} className='ehon-jisho-wordmodal'/>
                                ) : (
                                    <VirusModal word={word} className='ehon-jisho-wordmodal'/>
                                )
                                }
                            </div>
                        ) : (
                            <div className='wordModal-wrapper'>
                                <WordModal word={word} className='ehon-jisho-wordmodal'/>
                            </div>
                        )}
                    
                    </div>
                ))}
            </ReactPageScroller>
        )}
        </MContext.Consumer>
        
    </div>
  )
}
