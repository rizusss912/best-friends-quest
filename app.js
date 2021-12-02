import express from 'express';
import path from 'path';
import statics from 'serve-static';
import { fileURLToPath } from 'url';

import { ssr } from './src/ssr';
import { createContext } from './src/context';
import { Client } from './src/client';
import { router } from './src/api';
import { getLanguageByAcceptLanguages } from './src/utils/get-language-by-accept-languages';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', statics(path.join(__dirname, 'dist', 'public')));

app.use('/api', router);

app.use('/', async (req, res) => {
   const lang = getLanguageByAcceptLanguages(req.acceptsLanguages());
   const context = createContext(lang);
   const out = await ssr(context, Client, req.path);

   res.send(out.html);
})

export default app;