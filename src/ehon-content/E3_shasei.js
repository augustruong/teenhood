import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';
import { PopUpModal } from '../components/modals/PopUpModal'

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E3_shasei.css'

export default function E3_shasei(props) {
    const thisLesson = EhonData[props.index];

    return(
        <div>
            
        </div>
    )
}

