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
  padding: 30px 30px 20px 50px;
  margin: 0 auto;
  @media screen and (max-width: 824px) {
    width: 90vw;
  }
`;
const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  
  .virus-img {
    margin-top: -100px;
  }
  .virus-info {text-align: left;}
  .title {
    color: var(--red-color);
    margin-bottom: 20px;
    line-height: 50px;
  }
  .yomi{
    font-size: 13px;
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
    height: 380px;
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
  .flex-row {
    gap: 40px;
  }
  .flex-row > div {
    flex-basis: 50%;
    text-align: left;
  }

  .via-icon {
    margin-right: 5px;
    width: 60px;
  }
`;
export default function VirusModal(props) {
    var getWord = VirusData.filter(function (el)
    {
        return el.name === props.word;
    });
    var thisVirus = getWord[0];

    return(
        <ModalWrapper>
            <ModalHead>
                <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/e7_std/${thisVirus.name}.png`}/>
                <div className='virus-info'>
                    <p className='yomi'>{`[${thisVirus.yomi} - ${thisVirus.eigo}]`}</p>
                    <h2 className='title'>{thisVirus.name}</h2>
                    <div className='intro bold'>{thisVirus.intro}</div>
                </div>
            </ModalHead>
            <ModalContent>
                <div className='scroll-wrapper flex-row'>
                    <div>
                        <div style={{marginBottom: "30px"}}>
                            <div className='title'>????????????</div>
                            <p style={{marginTop: "10px", textAlign:"center", background:"#FEDEE2"}}>{thisVirus.time}</p>
                        </div>
                        <div style={{marginBottom: "30px"}}>
                            <div className='title'>????????????</div>
                            <div style={{marginTop: "20px"}}>
                                {thisVirus.via.map((item) => (
                                    <img className='via-icon' src={process.env.PUBLIC_URL + `/icons-stamps/e7_std/${item}.png`}/>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='title'>????????????</div>
                            <p style={{marginTop: "10px"}} dangerouslySetInnerHTML={{__html: `${thisVirus.method}`}}></p>
                        </div>
                    </div>
                    <div>
                        <div className='title'>??????</div>
                        
                        {thisVirus.name === "??????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???1???????????????1?????????</span><br/>
                                    <span className='keyword'>?????????????????????????????????????????????????????????????????????????????????</span>?????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???2???????????????3?????????</span><br/>
                                    ?????????????????????????????????<span className='keyword'>?????????????????????????????????????????????????????????????????????????????????</span>???????????????????????????????????????????????????????????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???3???????????????3????????????</span><br/>
                                    ??????????????????????????????<span className='keyword'>???????????????????????????????????????????????????????????????????????????????????????</span>?????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???4???????????????10????????????</span><br/>
                                    ?????????????????????????????????????????????????????????????????????????????????????????????<span className='keyword'>????????????????????????</span>????????????
                                </p>
                            </div>
                        }
                        {thisVirus.name === "?????????????????????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???????????????????????????</span><br/>
                                    <span className='keyword'>?????????</span>????????????????????????????????????????????????<span className='keyword'>????????????????????????????????????????????????????????????????????????????????????</span>?????????????????????????????????????????????????????????????????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???????????????????????????</span><br/>
                                    ??????????????????????????????????????????????????????????????????<span className='keyword'>?????????</span>????????????????????????????????????????????????????????????????????????<span className='keyword'>???????????????</span>????????????
                                </p>
                            </div>
                        }
                        {thisVirus.name === "???????????????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???????????????????????????</span><br/>
                                    <span className='keyword'>?????????</span>?????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???????????????????????????</span><br/>
                                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                            </div>
                        }
                        {thisVirus.name === "???????????????????????????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                            </div>
                        }
                        {thisVirus.name === "????????????????????????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br/>
                                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                            </div>
                        }
                        {thisVirus.name === "?????????????????????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???????????????????????????</span><br/>
                                    ???????????????????????????????????????????????????<br/>
                                    ??????????????????????????????????????????????????????????????????????????????<br/>
                                    ?????????????????????????????????????????????????????????????????????????????????<br/>
                                    ????????????????????????????????????????????????<br/>
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>???????????????????????????</span><br/>
                                    ??????????????????????????????<br/>
                                    ????????????????????????????????????????????????????????????????????????????????????<br/>
                                    ??????????????????????????????????????????
                                </p>
                            </div>
                        }
                        {thisVirus.name === "HIV?????????????????????" &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>?????????</span><br/>
                                    HIV???????????????2???4?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>????????????</span><br/>
                                    ????????????????????????????????????????????????????????????????????????????????????????????????10??????????????????????????????????????????
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>??????????????????</span><br/>
                                    ????????????????????????????????????????????????????????????????????????(???????????????????????????????????????????????????????????????????????????????????????????????????????????????)???????????????????????????????????????
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </ModalContent>
        </ModalWrapper>
    )
}