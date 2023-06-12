import express from 'express';
import cors from 'cors';
import { generateData } from './scripts/generateData.js';
import { readFile } from 'fs/promises'

import cookieParser from 'cookie-parser';

export const config = JSON.parse(await readFile('./src/config/config.json', 'utf-8'));

const app = express();

app.use(cookieParser())

app.set('view-engine', 'ejs');
app.use(cors());

app.use(express.static('src/public/'));
app.set('views', 'src/views/');

app.get('/', async(req, res) => {
    res.status(200);
    res.render('index.ejs', {
        data: await generateData(),
        json: JSON.stringify(await generateData()),
        config: JSON.stringify(config)
    });

});

app.get('/portfel', async(req, res) => {
    const requiredCookies = {
        balance: req.cookies["balance"]
    }
    config.currencies.forEach((currency) => requiredCookies[currency] = req.cookies[currency])
    console.log(requiredCookies)
    if (req.cookies['login'] && req.cookies['password']) {
        res.status(200);
        res.render('portfel.ejs', {
            cookies: JSON.stringify(requiredCookies),
            data: await generateData(),
            config: JSON.stringify(config)
        });
    } else {
        res.redirect('/login')

    }
});

app.get('/login', async(req, res) => {
    res.status(200);
    res.render('login.ejs', {
        config: JSON.stringify(config)
    });
});

app.get('*', async(req, res) => {
    res.status(404);
    res.render('error.ejs', {
        config: JSON.stringify(config),
        error: res.statusCode,
    });
});

app.listen(config.port, () => console.log(`Serwer został włączony! [http://127.0.0.1:${config.port}/]`));