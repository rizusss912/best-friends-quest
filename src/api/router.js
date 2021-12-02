import express from 'express';
import cookieParser from 'cookie-parser';

import quest from './routers/quest';
import question from './routers/question';

const router = express.Router();

router.use(cookieParser());

router.use('/quest', quest);
router.use('/question', question);

export default router;