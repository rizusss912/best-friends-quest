import express from 'express';
import path from 'path';
import statics from 'serve-static';
import { fileURLToPath } from 'url';
import { ssr } from './src/ssr/index.js';
import { createContext } from './src/context/index.js';
import { Client } from './src/client/index.js';
import fs from 'fs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.copyFile('src/client/styles.css', 'dist/public/styles.css', err => {
   if(err) throw err;
});

app.use('/static', statics(path.join(__dirname, 'dist', 'public')));

app.use('/', async (req, res) => {
   const context = createContext();
   const out = await ssr(context, Client, req.path);

   res.send(out.html);
})

export default app;