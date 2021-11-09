import express from 'express';
import path from 'path';
import statics from 'serve-static';
import { fileURLToPath } from 'url';
import { ssr } from './ssr';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', statics(path.join(__dirname, 'dist')));

app.get('/', async (req, res) => {
   const out = await ssr({});

   res.send(out.html);
})

export default app;