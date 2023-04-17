import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from 'chai';

setDefaultTimeout(60 * 1000);
const myHeaders = new Headers();
myHeaders.append("apikey", "mGUVkFRkqi10cEw4vzESjYgo9dfQVKYw");
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

let request;

When('I request the conversion rate was on {string}, between the {string} and the {string}', async (date, from, to) => {
    const requestUrl = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=1&date=${date}`;
    request = fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .catch(error => console.error(error));
});

Then('I receive response', async () => {
    const response = await request;
    console.log(response);
    expect(response.success).to.be.true;
});

