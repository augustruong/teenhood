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
  .virus-title {
    color: var(--red-color);
    margin-bottom: 5px;
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
    var thisVirus = VirusData[props.index]
    return(
        <ModalWrapper>
            <ModalHead>
                <img className='virus-img' src={process.env.PUBLIC_URL + `/images/ehon/e7_std/virus-${props.index}.png`}/>
                <div className='virus-info'>
                    <h2 className='virus-title'>{thisVirus.name}</h2>
                    <div className='virus-intro bold'>{thisVirus.intro}</div>
                </div>
            </ModalHead>
            <ModalContent>
                <div className='scroll-wrapper flex-row'>
                    <div>
                        <div style={{marginBottom: "30px"}}>
                            <div className='title'>潜伏期間</div>
                            <p style={{marginTop: "10px", textAlign:"center", background:"#FEDEE2"}}>{thisVirus.time}</p>
                        </div>
                        <div style={{marginBottom: "30px"}}>
                            <div className='title'>感染経路</div>
                            <div style={{marginTop: "20px"}}>
                                {thisVirus.via.map((item) => (
                                    <img className='via-icon' src={process.env.PUBLIC_URL + `/icons-stamps/e7_std/${item}.png`}/>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='title'>予防方法</div>
                            <p style={{marginTop: "10px"}} dangerouslySetInnerHTML={{__html: `${thisVirus.method}`}}></p>
                        </div>
                    </div>
                    <div>
                        <div className='title'>症状</div>
                        
                        {props.index === 0 &&
                            <div style={{marginTop: "10px"}}> 
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
                        {props.index === 1 &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>＜女の体を持つ人＞</span><br/>
                                    <span className='keyword'>無症状</span>がほとんど。症状を感じる場合は、<span className='keyword'>おりものの量が増えたり、生理痛のような痛み、不正性器出血</span>（生理でもないのに、性器から出血すること）などがある。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>＜男の体を持つ人＞</span><br/>
                                    感染すると、半分の人に症状が出る。半分の人は<span className='keyword'>無症状</span>。尿道がかゆくなったり排尿の時に痛みを感じるなど<span className='keyword'>尿道に症状</span>が出る。
                                </p>
                            </div>
                        }
                        {props.index === 2 &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>＜女の体を持つ人＞</span><br/>
                                    <span className='keyword'>無症状</span>のことが多い。緑黄色のおりものや、尿道から膿がでることがある。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>＜男の体を持つ人＞</span><br/>
                                    尿道のかゆみや熱っぽさがある。粘液や黄色の膿が出る。排尿時に激しい痛み、性器全体の腫れがでることもある。
                                </p>
                            </div>
                        }
                        {props.index === 3 &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    男女ともに無症状のことが多い。性器に小さい水ぶくれやただれができる。激しい痛みで、おしっこや歩行に困難が出る場合もある。
                                </p>
                            </div>
                        }
                        {props.index === 4 &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    小さな尖ったイボが、性器のあらゆる箇所にできる。イボが集まり小さなカリフラワー状になることも。<br/>
                                    痛みや痒みを感じることもあるが、基本的に自覚症状はなく、イボができないこともある
                                </p>
                            </div>
                        }
                        {props.index === 5 &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>＜女の体を持つ人＞</span><br/>
                                    ・男の体を持つ人より強い症状が出る<br/>
                                    ・強い悪臭のする白や黄色の泡状のおりものが大量に出る<br/>
                                    ・腟炎をおこし、陰部がかゆくなったり、痛くなったりする<br/>
                                    ・腟性交の時や排尿時に痛みがある<br/>
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>＜男の体を持つ人＞</span><br/>
                                    ・無症状の場合が多い<br/>
                                    ・排尿時の痛みがあったり、尿の回数が多くなったり（頻尿）<br/>
                                    ・前立腺炎を起こす場合もある
                                </p>
                            </div>
                        }
                        {props.index === 6 &&
                            <div style={{marginTop: "10px"}}> 
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>急性期</span><br/>
                                    HIVに感染して2〜4週間経過すると、発熱、咽頭痛、筋肉痛、頭痛などの症状が出る。これらは多くの場合、自然に消える。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>無症候期</span><br/>
                                    体の免疫力で、ウイルス量はある一定のレベルまで減少・安定。数年〜10数年程度は、症状がなくなる。
                                </p>
                                <p className='symptom-paragraph'>
                                    <span className='keyword'>エイズ発症期</span><br/>
                                    治療をしないでいると、免疫力が低下。日和見感染症(健康な人には害のないような弱い細菌や真菌しんきん、ウイルスなどによる感染症)や悪性腫瘍の症状が現れる。
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </ModalContent>
        </ModalWrapper>
    )
}