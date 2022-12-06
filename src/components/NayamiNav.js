import React from 'react';
import { NavLink } from 'react-router-dom';
import { MContext } from '../pages/ehon/MyProvider';
import styled from 'styled-components';

import EhonData from '../data/EhonData.json'

const NayamiNavWrapper = styled.div`
    width: 32%;
    background-color: #FFF;
    border-radius: 50px;
    padding: 5px 5px;
    position: fixed;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    img {
        width: 10%;
        max-width: 60px;
    }

    img:hover {
        transform: scale(1.2) translateY(-5px); 
        transition: transform .1s ease-in-out;
        cursor: pointer;
    }
`

export default function NayamiNav(props) {
    const thisLesson = EhonData[props.index];

    return(
        <NayamiNavWrapper className='flex-row'>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-curve.png`}/>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-gekkei.png`}/>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-penis.png`}/>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-love.png`}/>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-baby.png`}/>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-condom.png`}/>
            <img className='icon' src={process.env.PUBLIC_URL + `/icons-stamps/nayami/i-std.png`}/>
        </NayamiNavWrapper>
    )
}