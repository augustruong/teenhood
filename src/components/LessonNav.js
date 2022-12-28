import React from 'react';
import { NavLink } from 'react-router-dom';
import PartList from './PartList';
import WordList from './WordList';
import { MContext } from '../module/MyProvider';

import EhonData from '../data/EhonData.json'

import './LessonNav.css'

export default function LessonNav(props) {
    const thisLesson = EhonData[props.index];
    let numSection = 0;
    EhonData.map((child) => {
        if (child.lessonId === thisLesson.lessonId) {numSection = child.sectionNumber}
    })
    console.log(numSection)

    return(
        
        <nav className='lesson-nav-wrapper'>
            <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/ehon/${thisLesson.lessonId}/thumbnail.png`}/>
            <div className='header'>
                <h4 className='title'>{thisLesson.title}</h4>
                <div className='progress-wrapper'>
                    <div className='progress-bar'></div>
                    <MContext.Consumer>
                        {(context) => (
                            <div className='progress-status' style={{fontSize: 12}}>{(context.visited.visitedPage.filter(x => x == true).length / numSection* 100).toFixed(0)}% COMPLETE</div>
                        )}
                    </MContext.Consumer>
                </div>
                <div className='method-wrapper'>
                    <NavLink to={`/ehon/${thisLesson.lessonId}/content`} ><button className={props.method === 'ehon' ? 'method-icon ehon small active' : 'method-icon ehon small'}>絵</button></NavLink>
                    <NavLink to={`/ehon/${thisLesson.lessonId}/jisho`} ><button className={props.method === 'jisho' ? 'method-icon jisho small active' : 'method-icon jisho small'}>辞</button></NavLink>
                    <NavLink to={`/ehon/${thisLesson.lessonId}/nayami`} ><button className={props.method === 'nayami' ? 'method-icon nayami small active' : 'method-icon nayami small'} >悩</button></NavLink>
                </div>
            </div>
            
            
            <div className='scroll-wrapper'>
                {props.method === 'ehon' && 
                    <PartList index={props.index} />
                }
                {props.method === 'jisho' && 
                    <WordList index={props.index}/>
                }
            </div>
        </nav>
    )
}