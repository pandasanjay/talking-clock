const express = require('express');

const router = express.Router();
/* eslint-disable import/no-extraneous-dependencies */
const talk = require("talking-clock").default


/* GET users listing. */
router.get('/:lang/talk/:time?', (req, res) => {
  const {time:timeInput, lang} = req.params;
  const date = new Date();
  const hour = date.getHours()
  const minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
  const time = timeInput || `${hour}:${minute}`
  talk(time, lang).then((timeWord) => {
    res.json({
      word: timeWord
    })
  }).catch((err) => {
    res.status(400).send({err: err.message})
  })
});

module.exports = router;
