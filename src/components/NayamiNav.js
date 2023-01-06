import React from 'react';
import { NavLink } from 'react-router-dom';
import { MContext } from '../module/MyProvider';
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
        <MContext.Consumer>
            {(context) => (
                <NayamiNavWrapper className='flex-row'>
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-curve.png`}
                         onClick={() => {context.setCurrentPage(0)}}     
                    />
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-gekkei.png`}
                         onClick={() => {context.setCurrentPage(1)}}     
                    />
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-penis.png`}
                         onClick={() => {context.setCurrentPage(2)}}     
                    />
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-love.png`}
                         onClick={() => {context.setCurrentPage(3)}}     
                    />
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-baby.png`}
                         onClick={() => {context.setCurrentPage(4)}}     
                    />
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-condom.png`}
                         onClick={() => {context.setCurrentPage(5)}}     
                    />
                    <img className='icon' 
                         src={process.env.PUBLIC_URL + `/icons-stamps/i-std.png`}
                         onClick={() => {context.setCurrentPage(6)}}     
                    />
                </NayamiNavWrapper>
            )}
        </MContext.Consumer>
    )
}