const express = require('express');
const app = express();
const twig = require('twig');

const connection = require('./config/database');

app.set('view engine','html');
app.engine('html', twig.__express);
app.set('views','views');

app.get('/', (req, res) => {

    const people = { name: 'Shilton'}
    connection.query('INSERT INTO `people` SET ?', people, (err) => {
        if (err) throw err;
    });

    connection.query('SELECT * FROM `people`', (err, results) => {
        if (err) throw err;
        res.render('index',{
            peoples:results
        });
    });
    
});


app.use('/',(req,res) => {
    res.status(404).send('<h1>404 Page Not Found!</h1>');
});

connection.connect((err) => {
    if (err) throw err;
    app.listen(3000);
});