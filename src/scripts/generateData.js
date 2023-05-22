import fetch from 'node-fetch';
import { config } from '../server.js';

export const generateData = async () => {
    const api = `http://api.nbp.pl/api/exchangerates/tables/a/last/${config.days}/?format=json`;

    const finalResponse = {};
    config.currencies.forEach((currency) => (finalResponse[currency] = { lastDays: [] }));

    const request = async () => {
        return await (await fetch(api)).json();
    };

    const response = await request();
    await response.forEach((table) => {
        table.rates
            .filter((currency) => {
                return config.currencies.includes(currency.code);
            })
            .forEach((currency) => {
                if (!finalResponse[currency.code].code) finalResponse[currency.code].code = currency.code;
                if (!finalResponse[currency.code].name) finalResponse[currency.code].name = currency.currency;
                finalResponse[currency.code].lastDays.push(currency.mid);
            });
    });

    console.log(finalResponse)
    return finalResponse;
};
