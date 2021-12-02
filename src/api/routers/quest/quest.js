import express from 'express';
import bodyParser from 'body-parser';

import { MAX_QUESTIONS_IN_QUEST } from '../../../constants/quest';
import { cookieNames } from '../../constants/cookie-names';
import { QuestionsService, QuestsService, connect } from '../../../mongodb/index';

const router = express.Router();
const questsService = new QuestsService();
const questionsService = new QuestionsService();

router.use(bodyParser.json());

router.get('/create-status', async function(req, res) {
    try {
        const questId = req.cookies[cookieNames.idOfQuestBeingCreated];
        validate();
        const quest = await connect(async () => {
            return await questsService.getQuestStatus(questId);
        });

        res.json(quest);
    } catch (e) {
        res.status(400).send({ message: e.toString() });
    }
});

router.post('/create', async function (req, res) {
    try {
        const { name } = req.body;
        const quest = await connect(async () => {
            return await questsService.createQuest(name);
        });

        const { id } = quest;

        delete quest.id;

        res.cookie(
            cookieNames.idOfQuestBeingCreated,
            id,
            { httpOnly: true, secure: true, maxAge: 90000000 }
        );

        res.json(quest);
    } catch (e) {
        res.status(400).send({ message: e.toString() });
    }
});

router.post('/answer', async function (req, res) {
    try {
        const { question, answers, correctAnswerIndex, questionId } = req.body;
        const questId = req.cookies[cookieNames.idOfQuestBeingCreated];
        const quest = await connect(async () => {
            //TODO можно оптимизировать запросы
            const quest = await questsService.getQuestStatus(questId);

            if (quest.questions.length >= MAX_QUESTIONS_IN_QUEST) {
                throw Error('maximum number of questions for this quest has been reached');
            }

            let record;

            if (!questionId) {
                record = await questionsService.createQuestion(question, answers, false);
            } else {
                record = await questionsService.getQuestion(questionId);

                if (!record) {
                    throw Error('invalid id');
                }
            }
            
            const isReady = quest.questions.length + 1 === MAX_QUESTIONS_IN_QUEST;
            await questsService.addQuestionForQuest(questId, record.id, correctAnswerIndex, isReady);

            return await questsService.getQuestStatus(questId);
        });

        res.json(quest);
    } catch (e) {
        res.status(400).send({ message: e.toString() });
    }
});

export default router;
