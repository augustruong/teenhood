import React, { useState } from 'react'

export default function QuestionSet(props) {
    const [showAnswer, setShowAnswer] = useState(false)

    return (
    <div className='nayami-set'>
        <div className='nayami-question-wrapper'　onClick={() => setShowAnswer(!showAnswer)}>
            <div className={showAnswer ? 'nayami-question active' : 'nayami-question'}>{props.question}</div>
            {!showAnswer && 
                <div className='toggle-icon' onClick={() => setShowAnswer(!showAnswer)}>✙</div>
            }
            {showAnswer && 
                <div className='toggle-icon' onClick={() => setShowAnswer(!showAnswer)}>ー</div>
            }
        </div>
        {showAnswer &&
        <div className='nayami-answer'>{props.answer}</div>
        }
    </div>
    )
}
