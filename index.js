const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/test', (req, res) => {
    res.send('hello test!');
});
app.get('/testV2', (req, res) => {
    res.send('hello testV2!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});