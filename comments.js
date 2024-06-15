// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Load comments module
const comments = require('./comments');

// Load comments module
const comments = require('./comments');

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', (req, res) => {
    res.render('index', { comments: comments.get() });
});

// POST /comments
app.post('/comments', (req, res) => {
    comments.add(req.body.comment);
    res.render('index', { comments: comments.get() });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});