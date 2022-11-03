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

router.post('/', (req, res) => {
  let post = req.body
  db.addPost(post)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'something went wrong' })
    })
})

module.exports = router
