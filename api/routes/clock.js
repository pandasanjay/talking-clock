const express = require('express');

const router = express.Router();
/* eslint-disable import/no-extraneous-dependencies */
const talk = require("talking-clock").default



/* GET /en/talk/ time in word */
router.get('/:lang/talk/:time?', (req, res) => {
  const {time:timeInput, lang} = req.params;
  talk(timeInput, lang).then((timeWord) => {
    res.json({
      word: timeWord
    })
  }).catch((err) => {
    res.status(400).send({err: err.message})
  })
});

module.exports = router;
