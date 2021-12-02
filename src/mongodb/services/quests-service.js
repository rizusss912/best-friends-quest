import { ObjectID } from 'mongodb';
import { QuestionsService } from './questions-service';

import { MongoDB } from '../mongodb';

let instance;

const defaultQuestConfig = Object.freeze({
    questions: [],
    friends: [],
    isReady: false
});
const questionsService = new QuestionsService();

export class QuestsService {
    mongodb = new MongoDB();

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    async getQuest(id) {
        return this.mongodb.quests.findOne({ _id: new ObjectID(id) })
            .then(record => {
                if (!record) {
                    throw new Error('invalid quest id');
                }

                record.id = record._id.toString();
                delete record._id;
                return record;
            });
    }

    async getQuestStatus(id) {
        const quest = await this.getQuest(id);
        const questionsIds = quest.questions.map(({ id }) => id);
        const questions = questionsIds.length === 0
            ? []
            : await questionsService.getQuestions(questionsIds);

        quest.questions = quest.questions.map(({ id }) => {
            const question = questions.find(question => question.id === id);
            delete question.id;
            delete question.isPublic;

            return question;
        });

        return quest;
    }

    async createQuest(name) {
        const quest = Object.assign({ name }, defaultQuestConfig);

        return new Promise((resolve, reject) =>
            this.mongodb.quests.insertOne(
                { ...quest },
                (err, result) => {
                if (err) {
                    reject('bd: failed to create a quest');
                }

                resolve({ ...quest, id: result.insertedId.toString() });
                }
            )
        )
    }

    async addQuestionForQuest(questId, questionId, answerIndex, isReady) {
        console.log(isReady);
        return this.mongodb.quests.updateOne(
            { _id:  new ObjectID(questId) },
            {
                $push: { questions: {id: questionId, answerIndex } },
                $set: { isReady }
            }
        );
    }
}