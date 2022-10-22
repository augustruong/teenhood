import React from 'react'
import { Link } from 'react-router-dom';

import './LessonList.css'

export default class LessonThumb extends React.Component {
    constructor(props) { super(props); }
    render() {
        return(
            <Link to={`/lessons/${this.props.lessonId}`} className='lesson-thumb'>
                    <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/lessons/${this.props.lessonId}/thumbnail.png`}/>
                    <h4 className='title'>{this.props.title}</h4>
                    <div className='subtitle'>{this.props.subtitle}</div>
            </Link>
        )
    }
}