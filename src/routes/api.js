const express = require('express');

const router = express.Router();
const generateNewId = () => crypto.randomUUID();

const hoots = [{
  id: generateNewId(),
  content: "Let's Rock!",
  createdAt: new Date(),
}];

router.get('/helloJson', (req, res) => {
  const helloJSON = {
    message: 'Hello there!',
  };
  res.json(helloJSON);
});

router.get('/timeJSON', (req, res) => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  const timeJSON = {
    message: dateString,
  };
  res.json(timeJSON);
});

router.post('/addHoot', (req, res) => {
  console.log('req.body.content=', req.body.content); // NEW!
  const test = {
    testId: generateNewId(),
    testMsg: req.body.content, // NEW!
  };
  res.json(test);
});

router.get('/hoots', (req, res) => {
  res.json(hoots);
});

module.exports = router;
