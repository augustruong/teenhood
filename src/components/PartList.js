import React from 'react'

import { MContext } from '../pages/ehon/MyProvider';

import EhonData from '../data/EhonData.json'

import './PartList.css'

export default function PartList(props) {
    const thisLesson = EhonData[props.index];
    const partListArray = thisLesson.partList;
    
    return (
        <div className='part-list-wrapper'>
            {partListArray.map((item) => (
                <div key={item} className='part-list-item'>
                    <div className='parent-title'>{item.parent}</div>
                    {item.child.map((child) => (
                        <MContext.Consumer>
                            {(context) => (
                                <div className='child-title-wrapper'>
                                    <div className={context.visited.visitedPage[child.index] === true ? 'check after' : 'check before'}></div>
                                    <a
                                        key={child}  
                                        // href='#/ehon/e1_shishunki/content'
                                        className={context.state.currentPage === child.index ? 'child-title active' : 'child-title'} 
                                        onClick={() => {context.setCurrentPage(child.index)}}
                                    >{child.title}
                                    </a>
                                </div>
                            )}
                        </MContext.Consumer>
                        
                    ))}
                </div>
            ))}
        </div>
    )
}