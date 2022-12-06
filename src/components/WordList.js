import React from 'react'
import { MContext } from '../module/MyProvider';
import EhonData from '../data/EhonData.json'

import './WordList.css'

export default function WordList(props) {
    const thisLesson = EhonData[props.index];
    const wordListArray = thisLesson.wordList;
    
    return (
        <div className='word-list-wrapper'>
            {wordListArray.map((word,index) => (
                <MContext.Consumer>
                    {(context) => (
                        <div key={word} 
                            className={context.state.currentPage === index ? 'word-list-item active' : 'word-list-item'}
                            onClick={() => {context.setCurrentPage(index)}}>
                            <div key={word} className='word-title'>{word}</div>
                        </div>
                    )}
                </MContext.Consumer>
            ))}
        </div>
    )
}