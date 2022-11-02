import React from 'react'
import { MContext } from '../pages/ehon/MyProvider';
import EhonData from '../data/EhonData.json'

import './WordList.css'

export default function WordList(props) {
    const thisLesson = EhonData[props.index];
    const wordListArray = thisLesson.wordList;
    
    return (
        <div className='word-list-wrapper'>
            {wordListArray.map((word) => (
                <div key={word} className='word-list-item'>
                    <div>{word}</div>
                </div>
            ))}
        </div>
    )
}