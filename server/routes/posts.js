const express = require('express')

const db = require('../db/posts')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPosts()
    .then((postResults) => {
      res.json(postResults)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
