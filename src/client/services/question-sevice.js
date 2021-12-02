import { fetchJSON } from '../utils/fetch-json';

let instance;

export class QuestionService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    getList(page, apiUrl) {
        return fetchJSON(`${apiUrl}/question/list?page=${page}`, { method: 'GET' });
    }

    createPublicQuestion(question, answers, apiUrl) {
        return fetchJSON(`${apiUrl}/question/create`, { method: 'POST' }, { question, answers });
    }
}