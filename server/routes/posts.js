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
      res.status(500).json({ message: 'Take a look at Routes' })
    })
})

router.post('/', (req, res) => {
  let post = req.body
  db.addPost(post)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Take a look at Routes' })
    })
})

module.exports = router
