const express = require('express')
const connection = require('../config')
const router = express.Router()

//const { check, validationResult } = require('express-validator')

router.get('/', (req, res) => {
  connection.query('SELECT * FROM speakcodefront', [req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error retrieving data')
    } else {
      res.status(200).json(results)
    }
  })
})
module.exports = router