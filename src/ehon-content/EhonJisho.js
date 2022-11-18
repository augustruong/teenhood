import React from 'react'
import ReactPageScroller from 'react-page-scroller';
import { MContext } from '../pages/ehon/MyProvider';

import WordModal from '../components/modals/WordModal';
import EhonData from '../data/EhonData.json'
import E1_shishunki from './E1_shishunki';
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
                    <div className='wordModal-wrapper'>
                        <WordModal word={word} className='ehon-jisho-wordmodal'/>
                    </div>
                ))}
            </ReactPageScroller>
        )}
        </MContext.Consumer>
        
    </div>
  )
}
