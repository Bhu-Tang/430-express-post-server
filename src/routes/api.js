const express = require('express');

const router = express.Router();

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

module.exports = router;
