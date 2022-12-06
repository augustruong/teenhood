import React, {useState,useEffect} from 'react'
import LessonNav from '../../components/LessonNav'
import MyProvider from '../../module/MyProvider'
import EhonJisho from '../../ehon-content/EhonJisho'


export default function EhonJishoPage(props) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return(
        <MyProvider>
            <div className='ehon-jisho-page'>
                <LessonNav index={props.index} method={'jisho'}/>
                <EhonJisho index={props.index}/>
            </div>
        </MyProvider>
    )
}