import React from 'react'
import { Link } from 'react-router-dom';

import './LessonList.css'

export default class LessonThumb extends React.Component {
    constructor(props) { super(props); }
    render() {
        return(
            <Link to={`/ehon/${this.props.lessonId}/cover`} className='lesson-thumb'
                style={{backgroundColor: `${this.props.bgColor}`}}
            >
                <div className='lesson-thumb__inner'>
                    <img className='thumbnail' src={process.env.PUBLIC_URL + `/images/ehon/${this.props.lessonId}/thumbnail.png`}/>
                    <h4 className='title'>{this.props.title}</h4>
                    <div className='subtitle'>{this.props.subtitle}</div>
                </div>
            </Link>
        )
    }
}