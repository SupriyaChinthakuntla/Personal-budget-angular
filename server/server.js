const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

const data= require('./budget.json');

app.get('/budget', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});