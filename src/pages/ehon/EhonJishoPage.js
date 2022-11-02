import React, {useState} from 'react'
import LessonNav from '../../components/LessonNav'
import MyProvider from './MyProvider'
import EhonJisho from '../../ehon-content/EhonJisho'


export default function EhonJishoPage(props) {
    return(
        <MyProvider>
            <div className='ehon-jisho-page'>
                <LessonNav index={props.index} method={'jisho'}/>
                <EhonJisho index={props.index}/>
            </div>
        </MyProvider>
    )
}