const connection = require('./connection')

function getPosts(db = connection) {
  return db('posts').select()
}

module.exports = {
  getPosts,
}
