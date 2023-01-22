import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const PageWrapper = styled.div`
    background-color: #FABEAE;
    text-align: center;
    height: 100vh;
    padding-top: 15%;

    img {
        width: 250px;
    }
    .sorry {
        font-family: var(--font-title);
        color: #20548A;
        font-size: 52px;
        margin-top: -60px;
        margin-bottom: 30px;
    }
`

export default function UnavailablePage() {
    return(
        <PageWrapper>
            <img src={logo} className='logo-svg'/>
            <div className='sorry'>Sorry</div>
            <div>
                モバイル編がまだ対応していないです。<br/>PCでアクセスお願いします。<br/><br/>
                Mobile version is not available yet. <br/>Please access TeenHood on PC.
            </div>
        </PageWrapper>
    )
}