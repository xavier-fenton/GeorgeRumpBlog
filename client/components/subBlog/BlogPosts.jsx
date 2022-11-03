import React, { useState, useEffect } from 'react'
import { getPosts } from '../../apis/posts'

const BlogPosts = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    getPosts()
      .then((post) => {
        setPost(post)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [post])

  return (
    <>
      {post.map((post) => (
        <div key={post.id} className="posts-styling">
          <p>{post.post}</p>
        </div>
      ))}
    </>
  )
}

export default BlogPosts
