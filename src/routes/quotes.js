const express = require('express');
const db = require('../db.js');

const router = express.Router();

// just 3 quotes for now
const data = db.getAllQuotes();

router.get('/', (req, res) => {
  const { id } = req.query; // note: ESLint `airbnb/base` insists on object destructuring syntax!
  const quote = db.getQuoteById(id);
  // if (id) {
  //   res.json(quote);
  // } else {
  //   res.json(data);
  // }
  // eslint-disable-next-line no-unused-expressions
  id ? res.json(quote) : res.json(data);
});

router.get('/random', (req, res) => {
  res.json(db.randomQuote());
});

router.get('/recent', (req, res) => {
  res.json(db.recentQuote());
});

router.get('/:id', (req, res) => { // Note the colon, which matches anything after '/' and assigns it to the `id` variable
  const { id } = req.params; // NEW!
  const quote = db.getQuoteById(id);
  if (id) {
    res.json(quote);
  } else {
    res.json(data);
  }
});

module.exports = router;
