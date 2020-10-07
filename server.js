const express = require('express');
const app = express();
const port = 3000;
app.use('/', express.static('public'));

const budget = require('./budget.json')
// {
//     myBudget:[
//     {
//         title: 'Eat out',
//         budget: 30
//     },
//     {
//         title: 'Rent',
//         budget: 250
//     },
//     {
//         title: 'Groceries',
//         budget: 90
//     },
//     {
//         title: 'Movies',
//         budget: 50
//     },  
//     {
//         title: 'Travel Expenses',
//         budget: 300
//     }, 
//     {
//         title: 'Trip',
//         budget: 200
//     },
//     {
//         title: 'Repairs',
//         budget: 44
//     },
//     {
//         title: 'Shopping',
//         budget: 100
//     },
//     {
//         title: 'Medical Expenses',
//         budget: 150
//     },
// ]};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});