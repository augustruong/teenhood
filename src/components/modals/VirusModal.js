import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import VirusData from '../../data/VirusData.json'


const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  background: #FFFFFF;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 20px;
  text-align: center;
  padding: 30px 25px 20px 25px;
  margin: 0 auto;
  @media screen and (max-width: 824px) {
    width: 90vw;
  }
`;
const ModalHead = styled.div`
  .virus-info {text-align: left;}
  .virus-title {
    color: var(--red-color);
  }
`;

const ModalContent = styled.div`
  .title{
    background: #E06363;
    border-radius: 50px;
    padding: 5px 20px 7px 20px;
    color: #fff;
    display: inline-block
  }
  .symptom-paragraph {
    border-left: 1px solid #FA9999;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 15px;
  }
  .scroll-wrapper {
    margin-top: 30px;
    height: 320px;
    overflow-y: scroll;
    padding-right: 15px;
}

.scroll-wrapper::-webkit-scrollbar {
    width: 7px;
  }
  
.scroll-wrapper::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }
  
.scroll-wrapper::-webkit-scrollbar-thumb {
    background-color: #B4B4B4;
    border-radius: 100px;
  }
`;
export default function VirusModal(props) {
    var thisVirus = VirusData[props.index]
    return(
        <ModalWrapper>
            <ModalHead className='flex-row'>
                <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/e7_std/virus-${props.index+1}.png`}/>
                <div className='virus-info'>
                    <h2 className='virus-title'>{thisVirus.name}</h2>
                    <div className='virus-intro'>{thisVirus.intro}</div>
                </div>
            </ModalHead>
            <ModalContent>
                <div className='scroll-wrapper flex-row'>
                    <div>
                        <div>
                            <div className='title'>潜伏期間</div>
                            <p>{thisVirus.time}</p>
                        </div>
                        <div>
                            <div className='title'>感染経路</div>
                            {thisVirus.via.map((item) => (
                                <img className='via-icon' src={process.env.PUBLIC_URL + `/icons-stamps/e7_std/${item}.png`}/>
                            ))}
                        </div>
                        <div>
                            <div className='title'>予防方法</div>
                            <p dangerouslySetInnerHTML={{__html: `${thisVirus.method}`}}></p>
                        </div>
                    </div>
                    <div>
                        <div className='title'>症状</div>
                        
                        {props.index === 0 &&
                            <div>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>第1期（感染後1ヶ月）</span><br/>
                                    <span className='keyword'>感染した場所（性器や口など）にできもの・しこり・ただれ</span>などができる。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>第2期（感染後3ヶ月）</span><br/>
                                    手のひらや足の裏などの<span className='keyword'>全身に、バラの花のようなピンクや赤っぽい発疹・できもの</span>などが現れる。数週間から数ヶ月ほどで症状は消える。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>第3期（感染後3年以降）</span><br/>
                                    治療しなかった場合、<span className='keyword'>皮膚・骨・内臓などに固いしこりやゴムのような腫れ（ゴム腫）</span>などができる。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>第4期（感染後10年以降）</span><br/>
                                    心臓・血管・神経の異常が現れて、最後は死にいたることもあるが、<span className='keyword'>現在は極めてまれ</span>である。
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </ModalContent>
        </ModalWrapper>
    )
}