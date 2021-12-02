import { fetchJSON } from '../utils/fetch-json';

let instance;

export class QuestService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    createQuest(name, apiUrl) {
        return fetchJSON(`${apiUrl}/quest/create`, { method: 'POST' }, { name });
    }

    addAnswer(question, answers, correctAnswerIndex, apiUrl) {
        const body = { question, answers, correctAnswerIndex };
        return fetchJSON(`${apiUrl}/quest/answer`, { method: 'POST' }, body);
    }
    
    addAnswerById(questionId, apiUrl) {
        const body = { questionId };
        return fetchJSON(`${apiUrl}/quest/answer`, { method: 'POST' }, body);
    }

    getQuestCreateStatus(apiUrl) {
        return fetchJSON(`${apiUrl}/quest/create-status`, { method: 'GET' });
    }
}