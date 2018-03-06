import allLearners from '../data/mergeHelper';
const router = require('express').Router();
const fs = require('fs');

router.get('/learners', (req, res) => {
  res.json(allLearners);
});

router.post('/error', (req, res) => {
  const errorJSON = JSON.stringify(req.body, null, 2);
  fs.appendFileSync('./errorLogging/error.json', errorJSON);
});

module.exports = router;
