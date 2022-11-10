import React, { useState, useEffect} from 'react'
import LessonNav from '../../components/LessonNav'
import EhonContent from '../../ehon-content/EhonContent'
import MyProvider from './MyProvider'

export default function EhonContentPage(props) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return(
        <MyProvider>
            <div className='content-page'>
                <LessonNav index={props.index} method={'ehon'}/>
                <EhonContent index={props.index}/>
            </div>
        </MyProvider>
    )
}