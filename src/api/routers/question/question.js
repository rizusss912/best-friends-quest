import express from 'express';
import bodyParser from 'body-parser';

import { QuestionsService, connect } from '../../../mongodb/index';

const router = express.Router();
const questionsService = new QuestionsService();

router.use(bodyParser.json());


router.post('/create', async function (req, res) {
    try {
        const { question, answers } = req.body;
        const quest = await connect(async () => {
            return await questionsService.createQuestion(question, answers, true);
        });

        res.json(quest);
    } catch (e) {
        res.status(400).send({ message: e.toString() });
    }
});

router.get('/list', async function (req, res) {
    try {
        const { page } = req.query;

        if (!page) {
            throw Error('inpalit page number');
        }

        const list = await connect(async () => {
            const list = await questionsService.getList(page);
            return list.map(question => {
                delete question.isPublic;
                return question;
            });
        });

        res.json(list);
    } catch (e) {
        res.status(400).send({ message: e.toString() });
    }
});

export default router;
