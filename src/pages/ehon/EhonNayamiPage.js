import React, {useState,useEffect} from 'react'
import LessonNav from '../../components/LessonNav'
import NayamiModal from '../../components/modals/NayamiModal'
import MyProvider from '../../module/MyProvider'

export default function EhonNayamiPage(props) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return(
        <MyProvider>
            <div className='ehon-nayami-page'>
                <LessonNav index={props.index} method={'nayami'}/>
                <div className='nayami-wrapper' style={{width: "calc(100% - 270px)",float: "right"}}>
                    <NayamiModal index={props.index}/>
                </div>
            </div>
        </MyProvider>
    )
}