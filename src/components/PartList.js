import React from 'react';

import EhonData from '../data/EhonData.json'

import './PartList.css'

export default function PartList(props) {
    const thisLesson = EhonData[props.index];
    const partListArray = thisLesson.partList;
    
    return (
        <div className='part-list-wrapper'>
            {partListArray.map((item) => (
                <div key={item} className='part-list-item'>
                    <div className='parent-title'>{item.parentTitle}</div>
                    {item.childTitle.map((child) => (
                        <div className='child-title-wrapper'>
                            <div className='check'></div>
                            <div className='child-title' key={child}>{child}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}