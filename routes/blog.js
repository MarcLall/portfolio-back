const express = require('express')
const connection = require('../config')
const router = express.Router()

//onst { check, validationResult } = require('express-validator')

router.get('/', (req, res) => {
  connection.query('SELECT * FROM blog', [req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error retrieving data')
    } else {
      res.status(200).json(results)
    }
  })
})

router.post('/', (req, res) => {
  const { title, decription, date, photo } = req.body
  connection.query(
    'INTO blog (titre, decription, date, photo) value (?, ?, ?, ?)',
    [title, decription, date, photo],
    (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).send('Error retrieving data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
module.exports = router
