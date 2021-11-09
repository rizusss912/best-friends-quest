import express from 'express';
import {ssr} from './ssr';

const app = express();

app.get('/', async (req, res) => {
   const out = await ssr({});

   res.send(out.html);
})

export default app;