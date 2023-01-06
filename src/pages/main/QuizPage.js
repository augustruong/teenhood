import React, { useState, useEffect } from 'react'
import QuizSection from '../../components/QuizSection';

import './AllPage.css'

export default function QuizPage() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    
    return(
        <div id='quiz-page'>
            <section className='main-header-section' style={{backgroundColor:"#ACFFE6"}}>
                <img className='title' src={process.env.PUBLIC_URL + `/images/main/title_quiz.png`}/>
                <h3 className='bold mt20'>性の知識クイズでSQをテストする</h3>
            </section>

            <QuizSection />
        </div>
    )
}
