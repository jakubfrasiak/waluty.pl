import express from 'express';
import cors from 'cors';
import { generateData } from './scripts/generateData.js';
import {readFile} from 'fs/promises'
export const config = JSON.parse(await readFile('./src/config/config.json', 'utf-8'));


const app = express();

app.set('view-engine', 'ejs');
app.use(cors());

app.get('/', async (req, res) => {
    res.status(200);
    res.render('../src/views/index.ejs', {
        data: await generateData(),
        json: JSON.stringify(await generateData()),
        config: JSON.stringify(config)
    });
    
});

app.listen(config.port, () => console.log(`Serwer został włączony! [http://127.0.0.1:${config.port}/]`));
