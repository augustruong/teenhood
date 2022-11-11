import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'
import botAva from '../bot-ava.png'
import chatBotIcon from '../chat-bot-icon.png'

import LessonThumb from '../components/LessonThumb'

export default class ChatBox extends Component {
    state = {
        opened: false
    }

    toggleFloating = ({ opened }) => {
        this.setState({ opened }); 
    }

    render() {
        const { opened } = this.state;

        const steps = [
            {
                id: 'init',
                message: 'シリです。下から気になるカテゴリーをクリックしてね！',
                trigger: 'options-1',
            },
            {
                id: 'options-1',
                options: [
                    { value: 1, label: 'からだの変化', trigger:'1'},
                    { value: 2, label: '月経', trigger:'2'},
                    { value: 3, label: '射精', trigger:'3'},
                    { value: 4, label: '外性器', trigger:'4'},
                    { value: 5, label: '内性器', trigger:'5'},
                    { value: 7, label: '性交', trigger:'7'},
                    { value: 6, label: '恋愛・人間関係', trigger:'6'},
                    { value: 8, label: '妊娠・出産', trigger:'8'},
                    { value: 9, label: '避妊', trigger:'9'},
                    { value: 10, label: '性感染症', trigger:'10'},
                    
                ]
            },
            {
                id: '1',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「からだの変化」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e1_shishunki" title="#1: 私のからだが変化している" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e2_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e3_shasei" title="#3: 射精って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '2',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「月経」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e2_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e5_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '3',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「射精」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e3_shasei" title="#3: 射精って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e5_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '4',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「外性器」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e1_shishunki" title="#1: 私のからだが変化している" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '5',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「内性器」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e2_gekkei" title="#2: 月経って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e3_shasei" title="#3: 射精って何がおこるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '6',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「恋愛・人間関係」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e4_suki" title="#4: 人を好きになるってこと？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '7',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「性交」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e5_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e6_hinin" title="#6: 基本的な避妊方法" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e7_std" title="#7: 性感染症を知ろう" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>   
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '8',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「妊娠・出産」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e5_akachan" title="#5: 赤ちゃんはどこからくるの？" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            {/* <LessonThumb lessonId="e6_hinin" title="#6: 基本的な避妊方法" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/> */}
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '9',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「避妊」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e6_hinin" title="#6: 基本的な避妊方法" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                            <LessonThumb lessonId="e7_std" title="#7: 性感染症を知ろう" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: '10',
                component: (
                    <div className='suggested-lesson__wrapper'>
                        <div>「性感染症」に関する内容：</div>
                        <div className='suggested-lesson__list'>
                            <LessonThumb lessonId="e7_std" title="#7: 性感染症を知ろう" subtitle="思春期のしるし、男女のからだのちがい" bgColor="transparent"/>
                        </div>
                    </div>
                ),
                trigger: 'reselect',
            },
            {
                id: 'reselect',
                message: '他のテーマを見たいですか？',
                trigger: 'options-2'
            },
            {
                id: 'options-2',
                options: [
                    { value: 1, label: '他のテーマへ', trigger:'options-1'},
                    // { value: 2, label: 'フィードバックへ', trigger:'feedback'}
                ]
            },
            {
                id: 'feedback',
                message: 'Feedback'
            }
        ]

        return(
            <>
                <ChatBot 
                headerTitle="Chat with シリ（Shiri）"
                botAvatar={botAva}
                hideUserAvatar={true}
                width={"360px"}
                steps={steps}
                opened={opened}
                toggleFloating={this.toggleFloating}
                floating={true}
                />
            </>
        )
    }
}