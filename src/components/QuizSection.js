import React, { useState, useEffect, useRef } from 'react'
import { Stage, Sprite, Texture, render, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js';
import QuizData from '../data/QuizData.json'

import './QuizSection.css'

import btn_o from './assets/btn_o.svg'
import btn_x from './assets/btn_x.svg'
import btn_o_hv from './assets/btn_o_hv.svg'
import btn_x_hv from './assets/btn_x_hv.svg'
import btn_start from './assets/btn_start.svg'
import btn_retry from './assets/btn_retry.svg'
import btn_retry_hv from './assets/btn_retry_hv.svg'


import anketto_bg from './assets/anketto-bg.png'
import quiz_bg from './assets/quiz-bg.png'
import result_bg1 from './assets/result-bg1.png'
import result_bg2 from './assets/result-bg2.png'

export default function QuizSection() {
    const arr = [];
    const max = QuizData.length;
    const [questions,setQuestions] = useState();
    const [answers,setAnswers] = useState([]);
    
    function shuffle() {
        var n,p;

        for (let i = 0; i < 10; i++) {
            do {
              n = Math.floor(Math.random() * max);
              p = arr.includes(n);
              if(!p) arr.push(n);
            }
            while(p);
          }
        
          setQuestions(arr)
    }

    const [btnO,setBtnO] = useState(btn_o)
    const [btnX,setBtnX] = useState(btn_x)
    const [btnRetry,setBtnRetry] = useState(btn_retry)
    
    const [showAnketto, setShowAnketto] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [currentNo, setCurrentNo] = useState(0);
    const [score, setScore] = useState(0);
    
    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        if (currentNo + 1 < 10) setCurrentNo(currentNo + 1);
        else { setShowResults(true); setShowQuiz(false)}
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setCurrentNo(0);
        setShowResults(false);
        setShowQuiz(false);
        setShowAnketto(true)
    };
    return(
        <div className='quiz-section'>
            {showAnketto &&
                <div className='quiz-anketto'>
                    <p>
                    クイズは<span className='keyword'>10問で3~5分</span>程度です。<br/> 
                    8/10 以上に正解すると、<br/>
                    <span className='keyword'>TeenKIT 1箱</span>をプレゼントします。<br/> 
                    かならず参加してみよう！
                    </p>
                    <button type='submit' 
                        onClick={() => {
                            shuffle();
                            setShowAnketto(false); 
                            setShowQuiz(true)}
                        }
                    >はじめる</button>
                </div>
            }
            {showQuiz &&
                <Stage className='quiz-card' height={520} width={430} options={{backgroundAlpha: 0,antialias: true}}>
                <Sprite image={quiz_bg} x={0} y={32} />
                <Sprite 
                    image={process.env.PUBLIC_URL + `/icons-stamps/i-${QuizData[questions[currentNo]].tag}.png`}
                    x={170} y={0} scale={{ x: 0.17, y: 0.17 }}
                />
                <Text text={`${currentNo + 1}/10`}
                    x={215} y={130} anchor={0.5}
                    style={
                        new TextStyle({
                            align: 'center',
                            fontSize: 22,
                            fontWeight: 300,
                            fill: '#A3E0D9',
                            letterSpacing: 2
                        })
                        }
                />
                <Text text={QuizData[questions[currentNo]].question}
                    x={215} y={230} anchor={0.5}
                    style={
                        new TextStyle({
                            align: 'center',
                            fontSize: 24,
                            lineHeight: 24,
                            fontWeight: 500,
                            fill: '#44AEA1',
                            letterSpacing: 2,
                            wordWrap: true
                        })
                        }
                />
                <Sprite 
                    image={btnO}
                    x={150} y={390} anchor={0.5}
                    interactive={true} cursor={"pointer"}
                    pointerover={() => setBtnO(btn_o_hv)}
                    pointerout={() => setBtnO(btn_o)}
                    pointerdown={() => {
                        setAnswers(answers => [...answers, "true"])
                        optionClicked("true" === QuizData[questions[currentNo]].answer);
                    }}
                />
                <Sprite 
                    image={btnX}
                    x={280} y={390} anchor={0.5}
                    interactive={true} cursor={"pointer"}
                    pointerover={() => setBtnX(btn_x_hv)}
                    pointerout={() => setBtnX(btn_x)}
                    pointerdown={() => {
                        setAnswers(answers => [...answers, "false"])
                        optionClicked("false" === QuizData[questions[currentNo]].answer);
                    }}
                />
                </Stage>
            }
            {showResults &&
                /* Final Results */
                <div>
                    <Stage className="quiz-result" height={590} width={430} options={{backgroundAlpha: 0,antialias: true}}>
                        {score < 8 ? (
                            <Sprite image={result_bg1} x={0} y={32} />
                        ) : (
                            <Sprite image={result_bg2} x={0} y={32} />
                        )}
                        <Text text={score*10}
                                    x={215} y={255} anchor={0.5} rotation={6}
                                    style={
                                        new TextStyle({
                                            align: 'center',
                                            fontSize: 81,
                                            fontWeight: 600,
                                            fill: '#44AEA1',
                                        })
                                        }
                        />
                        <Sprite 
                            image={btnRetry}
                            x={215} y={560} anchor={0.5}
                            interactive={true} cursor={"pointer"}
                            pointerover={() => setBtnRetry(btn_retry_hv)}
                            pointerout={() => setBtnRetry(btn_retry)}
                            pointerdown={() => {
                                restartGame()
                            }}
                        />
                    </Stage>
                    <div className='quiz-answer'>
                            <h3>クイズの答え</h3>
                            {questions.map((key,index) => (
                                <div className='wrapper'>
                                    <p className='question'>{QuizData[key].question}</p>
                                    <div className='chosen-ans' style={answers[index] === QuizData[key].answer ? {backgroundColor: "#C7FFB8"} : {backgroundColor: "#FFD0D0"}}>
                                        <div>あなたの答え</div>
                                        <div>{answers[index] === "true" ? "O" : "X"}</div>
                                    </div>
                                    <div className='right-ans'>
                                        <div>正解</div>
                                        <div>{QuizData[key].answer === "true" ? "O" : "X"}</div>
                                    </div>
                                    <p className='detail'>説明：{QuizData[key].detail}</p>

                                </div>
                            ))}
                    </div>
                </div>
            }
        </div>
    );
}
