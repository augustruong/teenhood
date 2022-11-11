import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E4_suki.css'

export default function E4_suki(props) {
    const thisLesson = EhonData[props.index];

    return(
        <div>
            
        </div>
    )
}

