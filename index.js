const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/test', (req, res) => {
    res.send('versioning test!');
});
app.get('/angelika', (req, res) => {
    res.send('ma quanto è bella angelika!!!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});