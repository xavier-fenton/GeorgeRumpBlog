const connection = require('./connection')

function getPosts(db = connection) {
  return db('posts').select()
}
function addPost(post, created_at, db = connection) {
  return db('posts')
    .insert({
      created_at: created_at,
      id: post.id,
      post: post.post,
    })
    .select()
}

module.exports = {
  getPosts,
  addPost,
}
