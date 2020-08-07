const express = require('express');
var router = express.Router();
var db = require('../db.json')

router.get('/choice', (req, res) => {
    res.json(db)
});

router.post('/choice', (req, res) => {
    const choice = req.body
    res.json(choice)
});

router.get('/', (req, res) => {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write('<html><body><p>Greetings from stop amazing!</p></body></html>');
    res.end();
});

module.exports = router;