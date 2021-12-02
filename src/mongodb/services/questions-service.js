import { ObjectID } from 'mongodb';

import { QUESTIONS_OF_PAGE_COUNT } from '../../constants/question';
import { MongoDB } from '../mongodb';

let instance;


export class QuestionsService {
    mongodb = new MongoDB();

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    async getQuestion(id) {
        return this.mongodb.questions.findOne({ _id: new ObjectID(id) })
        .then(record => {
            delete record._id;
            return record;
        });
    }

    async getList(page) {
        const records = await this.mongodb.questions.find({ isPublic: true })
            .skip(QUESTIONS_OF_PAGE_COUNT * (page - 1))
            .limit(QUESTIONS_OF_PAGE_COUNT)
            .toArray();

        return records.map(record => {
                record.id = record._id.toString();
                delete record._id;
                return record;
            });
    }

    async getQuestions(ids) {
        const mongoIds = ids.map(id => ({ _id: new ObjectID(id) }));
        const records = await this.mongodb.questions.find({ $or: mongoIds }).toArray();

        return records.map(record => {
            record.id = record._id.toString();
            delete record._id;
            return record;
        });
    }

    async createQuestion(question, answers, isPublic) {
        const record = { isPublic, question, answers };

        return  new Promise((resolve, reject) =>
            this.mongodb.questions.insertOne(
                { ...record },
                (err, result) => {
                if (err) {
                    reject('bd: failed to create a question');
                }

                resolve({ ...record, id: result.insertedId.toString() });
                }
            )
        );
    }
}