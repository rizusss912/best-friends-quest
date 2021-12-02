import React, { Component } from 'react';

import { QuestService } from '../../services/quest-service';
import { QuestionService } from '../../services/question-sevice';

import './home.css';


export class Home extends Component {
    questService = new QuestService();
    questionService = new QuestionService();

    render() {
        return (
            <div className={'home'}>
                home
            </div>
        );
    }

    componentDidMount() {
        //this.questService.createQuest('ddd', this.context.apiUrl);
        /*this.questService.addAnswer(
            'test question',
            [
                { text: '1 answer' },
                { text: '2 answer' },
                { text: '3 answer' },
                { text: '4 answer' }
            ],
            0,
            this.context.apiUrl
        );*/
       this.questService.addAnswerById('61a38ae1e92db486f7e0ef9c', this.context.apiUrl);
    }
}